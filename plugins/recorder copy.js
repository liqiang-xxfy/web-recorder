////录制测试代码
Record.init = function(options) {
  Record.options = { mimeType: "video/webm; codecs=vp9", ...options };
};

export default function Record(gatewayCallbacks) {
  var setId;
  var audioContext;
  var ConnectObj;
  var mixAudioStream;
  var mediaRecorder;
  var newHandle;
  var recordedChunks = [];
  var writableStream;
  ///
  var videoEl;
  var palyIntervalId;
  this.start = async function(stream, remoteStreams) {
    const opts = {
      types: [
        {
          description: "video",
          accept: { "video/webm": [".webm"] }
        }
      ]
    };
    newHandle = await window.showSaveFilePicker(opts);
    writableStream = await newHandle.createWritable();
    console.log("writableStream:", writableStream);

    console.log("stream:", stream);
    //音频
    audioContext = new AudioContext();
    let audioIn = audioContext.createMediaStreamSource(stream);
    ConnectObj = audioContext.createMediaStreamDestination();
    audioIn.connect(ConnectObj);
    remoteStreams.forEach(element => {
      element && this.connectAudio(element);
    });
    mixAudioStream = ConnectObj.stream;

    // let audioTrack1 = stream.getAudioTracks().length && stream.getAudioTracks()[0];
    let audioTrack2 =
      mixAudioStream.getAudioTracks().length &&
      mixAudioStream.getAudioTracks()[0];
    // stream.removeTrack(audioTrack1);
    // stream.addTrack(audioTrack2);

    videoEl = document.createElement("VIDEO");
    var canvas = document.createElement("CANVAS");
    var ctx = canvas.getContext("2d");

    videoEl.muted = true;
    var width, height;

    videoEl.addEventListener(
      "play",
      () => {
        palyIntervalId = setInterval(() => {
          if (videoEl.videoWidth !== width || videoEl.videoHeight !== height) {
            canvas.width = width = videoEl.videoWidth;
            canvas.height = height = videoEl.videoHeight;
          }
          if (width && height) {
            ctx.drawImage(videoEl, 0, 0, width, height);
          }
        }, 100);
      },
      false
    );
    videoEl.setAttribute("autoplay", true);
    videoEl.srcObject = stream;
    videoEl.play();
    var mixvideoEltream = canvas.captureStream(10);
    mixvideoEltream.addTrack(audioTrack2);

    // videoTrack = mixvideoEltream.getVideoTracks()[0];

    mediaRecorder = new MediaRecorder(mixvideoEltream, {
      mimeType: Record.options.mimeType
    });
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    setId = setInterval(() => {
      mediaRecorder.requestData();
    }, 1000);
  };
  function handleDataAvailable(event) {
    console.log("data-available:", event.data);
    if (event.data.size > 0 && setId) {
      // recordedChunks.push(event.data);
      writableStream.write(event.data);
    } else {
    }
  }

  this.stop = function() {
    console.log("stopping");
    mediaRecorder && mediaRecorder.stop();
    clearInterval(setId);
    clearInterval(palyIntervalId);
    setId = "";
    return writableStream.close();
    // setTimeout(() => {
    // }, 100);
  };
  this.download = async function(remoteStream) {
    videoEl.srcObject = remoteStream;
    videoEl.play();
    // this.replaceVideo(remoteStream);

    return;
    var blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  ////////////////////////
  this.connectAudio = function(stream) {
    let audioTrack =
      stream.getAudioTracks().length && stream.getAudioTracks()[0];
    if (ConnectObj && audioTrack) {
      let audioIn = audioContext.createMediaStreamSource(stream);
      audioIn.connect(ConnectObj);
    }
  };
  this.replaceVideo = function(stream) {
    let videoTrack =
      stream.getVideoTracks().length && stream.getVideoTracks()[0];
    let audioTrack =
      mixAudioStream.getAudioTracks().length &&
      mixAudioStream.getAudioTracks()[0];
    let newStream = new MediaStream();
    videoTrack && newStream.addTrack(videoTrack);
    audioTrack && newStream.addTrack(audioTrack);
    replaceRecorder(newStream);
  };

  function replaceRecorder(stream) {
    clearInterval(setId);
    mediaRecorder.stop();
    // console.log("newHandle.getFile():", data);

    writableStream.close().then(() => {
      newHandle.createWritable().then(newwritableStream => {
        // newwritableStream.write({ type: "seek", position: 65050 });
        writableStream = newwritableStream;

        let newRecorder = new MediaRecorder(stream, {
          mimeType: Record.options.mimeType
        });
        newRecorder.ondataavailable = handleDataAvailable;
        newRecorder.start();
        setId = setInterval(() => {
          newRecorder.requestData();
        }, 1000);
        mediaRecorder = newRecorder;
      });
    });
  }
}
