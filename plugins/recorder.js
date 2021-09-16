Record.init = function(options, callbacks) {
    //配置默认参数
    Record.options = {
        mimeType: "video/webm; codecs=vp9",
        opts: {
            types: [
                {
                    description: "video",
                    accept: { "video/webm": [".webm"] },
                },
            ],
        },
        ...options,
    };
    Record.noop = function() {};
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Record.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Record.noop;

    //浏览器检测是否支持showSaveFilePicker
    let browser = options.browser;
    if ((browser.name === "Chrome" || browser.name === "Edge") && Number(browser.major) >= 86 && window.showSaveFilePicker) {
        Record.isRunTime = false;
    } else {
        Record.isRunTime = false;
    }
    //检测getUserMedia和getDisplayMedia
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
            let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            if (!getUserMedia) {
                return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
            }
            return new Promise(function(resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        };
    }
    if (navigator.mediaDevices.getDisplayMedia === undefined) {
        navigator.mediaDevices.getDisplayMedia = function(constraints) {
            let getDisplayMedia = navigator.getDisplayMedia;
            if (!getDisplayMedia) {
                return Promise.reject(new Error("getDisplayMedia is not implemented in this browser"));
            }
            return new Promise(function(resolve, reject) {
                getDisplayMedia.call(navigator, constraints, resolve, reject);
            });
        };
    }

    //浏览器是否支持MediaRecorder
    if (window.MediaRecorder) {
        Record.support = true;
        callbacks.success();
    } else {
        callbacks.error("no support");
        Record.support = false;
    }
};

export default function Record(mCallback) {
    let _this = this;
    mCallback = mCallback || {};
    mCallback.onended = typeof mCallback.onended == "function" ? mCallback.onended : Record.noop;
    mCallback.onerror = typeof mCallback.onerror == "function" ? mCallback.onerror : Record.noop;
    mCallback.onStartRecord = typeof mCallback.onStartRecord == "function" ? mCallback.onStartRecord : Record.noop;
    mCallback.onFinishRecord = typeof mCallback.onFinishRecord == "function" ? mCallback.onFinishRecord : Record.noop;

    let options = Record.options ? { ...Record.options } : {};
    let fileHandle, writableStream, mediaRecorder, setIntervalId, recordeStream, palyVideoEl;

    /**
     * 配置全局参数
     */
    this.setOption = option => {
        options = { ...options, ...option };
    };

    /**
     *  获取媒体流开始录制
     * @params videoEl {Element} <video>标签
     */
    this.start = async function(videoEl, isScreen) {
        let recordedChunks = [];
        if (!Record.support) return false;
        palyVideoEl = videoEl;
        if (Record.isRunTime) {
            fileHandle = await window.showSaveFilePicker(options.opts);
            writableStream = await fileHandle.createWritable();
            console.log("writableStream:", writableStream);
        }

        //获取stream
        let stream = await getMedia({ audio: true, video: true }, isScreen);
        if (!stream) return false;
        recordeStream = stream;
        let videoTrack = stream.getVideoTracks().length && stream.getVideoTracks()[0];
        if (videoTrack) {
            videoTrack.onended = () => {
                _this.stop();
            };
        }

        //创建MediaRecorder
        mediaRecorder = new MediaRecorder(stream, {
            mimeType: options.mimeType,
        });

        //接受录制数据回调
        mediaRecorder.ondataavailable = event => {
            console.log("data-available:", event.data);
            if (Record.isRunTime) {
                if (setIntervalId && event.data.size > 0) {
                    // recordedChunks.push(event.data);
                    writableStream.write(event.data);
                } else if (!setIntervalId && writableStream) {
                    try {
                        writableStream.close().then(() => {
                            mCallback.onFinishRecord();
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            } else {
                if (setIntervalId && event.data.size > 0) {
                    recordedChunks.push(event.data);
                } else if (!setIntervalId) {
                    mCallback.onFinishRecord(showDownload(recordedChunks));
                }
            }
        };
        //录制开始
        if (videoEl) {
            console.log(`"srcObject" in video`, "srcObject" in videoEl);
            try {
                if (videoEl || "srcObject" in videoEl) {
                    videoEl.srcObject = stream;
                } else {
                    videoEl.src = window.URL.createObjectURL(stream);
                }
                videoEl.play();
            } catch (error) {
                console.log(`error`, error);
                return false;
            }
        }
        setIntervalId = setInterval(() => {
            mediaRecorder.state === "recording" && mediaRecorder.requestData();
        }, 1000);
        mediaRecorder.start();
        mCallback.onStartRecord();
        return true;
    };

    //手动关闭 或 stream.onended
    this.stop = function() {
        console.log("stopping");
        if (!Record.support) return;
        setIntervalId && clearInterval(setIntervalId);
        setIntervalId = "";
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
            mediaRecorder.stop();
            let tracks = recordeStream.getTracks();
            for (let mst of tracks) {
                if (mst) {
                    mst.stop();
                }
            }
        }
    };

    //意外关闭
    this.close = () => {
        if (writableStream) {
            try {
                writableStream.close().then(() => {
                    mCallback.onFinishRecord();
                });
            } catch (e) {
                console.log(e);
            }
        }
    };

    this.download = function() {
        if (!Record.support) return;
    };

    async function getMedia(constraints, isScreen) {
        constraints = constraints || {};
        return new Promise((reslove, reject) => {
            if (isScreen) {
                navigator.mediaDevices
                    .getDisplayMedia(constraints)
                    .then(function(stream) {
                        reslove(stream);
                    })
                    .catch(function(err) {
                        reject(false);
                    });
            } else {
                navigator.mediaDevices
                    .getUserMedia(constraints)
                    .then(function(stream) {
                        reslove(stream);
                    })
                    .catch(function(err) {
                        reject(false);
                    });
            }
        });
    }

    function showDownload(Chunks) {
        let blob = new Blob(Chunks, {
            type: Record.options.mimeType,
        });
        let url = URL.createObjectURL(blob);
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        let date = new Date();
        // let y = date.getFullYear();
        // let m = (date.getMonth() + 1 < 10 ? "0" : "") + date.getMonth();
        // let d = (date.getDate() < 10 ? "0" : "") + date.getDate();
        // let H = (date.getHours() < 10 ? "0" : "") + date.getHours();
        // let M = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
        // let S = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
        // let fileName = y + m + d + H + M + S;
        let fileName = date.toLocaleString();
        a.download = fileName;
        // a.onclick = () => {
        //     window.URL.revokeObjectURL(url);
        // };
        return { element: a, name: fileName, url: url };
    }
}
