<template>
    <div id="home-page">
        <div class="content">
            <div class="video-box">
                <video ref="videoEl" src="" autoplay webkit-playsinline playsinline preload="auto" muted controls></video>
                <div class="recording" v-show="flicker && recording">
                    <svg
                        t="1618921750477"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="548"
                        width="18"
                        height="18"
                    >
                        <path
                            d="M5.12 512c0 280.064 226.816 506.88 506.88 506.88s506.88-226.816 506.88-506.88-226.816-506.88-506.88-506.88S5.12 231.936 5.12 512z"
                            fill="#D81E06"
                            p-id="549"
                        ></path>
                    </svg>
                    <span class="word">REC</span>
                </div>
            </div>
            <div class="control-btn">
                <el-button v-if="!recording" @click="startRecord">开始录制</el-button>
                <el-button v-else @click="stopRecord">停止录制</el-button>
                <!-- <el-button>down</el-button> -->
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import UAParser from "ua-parser-js";
export default {
    name: "index",
    data() {
        return {
            record: null,
            recording: false,
            flicker: false,
            setIntervalId: "",
        };
    },
    props: [],
    watch: {
        recording(newVal, oldVal) {
            if (newVal) {
                this.flicker = true;
                this.setIntervalId = setInterval(() => {
                    this.flicker = !this.flicker;
                }, 500);
            } else {
                this.setIntervalId && clearInterval(this.setIntervalId);
                this.setIntervalId = "";
                this.flicker = false;
            }
        },
    },
    computed: {},
    methods: {
        initServer() {
            let uaObj = new UAParser();
            console.log(`uaObj`, uaObj.getBrowser());
            //引入recoder
            let { default: Record } = require("~/plugins/recorder.js");
            Record.init({ browser: uaObj.getBrowser() });
            this.record = new Record({
                onended: () => {},
                onerror: () => {},
                onStartRecord: () => {
                    this.recording = true;
                    window.onbeforeunload = () => "";
                    window.onunload = () => "";
                },
                onFinishRecord: () => {
                    this.$message({
                        message: "录制已完成！",
                        type: "success",
                    });
                    this.recording = false;
                    window.onbeforeunload = "";
                    window.onunload = "";
                },
            });
        },
        startRecord() {
            if (!this.record || !this.$refs["videoEl"]) return;
            console.log("开始录制------");
            this.record
                .start(this.$refs["videoEl"])
                .then(resp => {
                    console.log(`rsep`, resp);
                })
                .catch(error => {
                    console.log("error:", error);
                });

            // Object.keys(this.remoteHandles).forEach(item => {
            //     let stream = this.remoteHandles[item].webrtcStuff.remoteStream;
            //     stream && record.connectAudio(stream);
            // });

            //////////////////////
        },
        stopRecord() {
            if (!this.record) return;
            this.record.stop();
        },
        downloadRecord() {
            console.log("下载录制------");
            window.record.download(Object.values(this.remoteHandles)[0].webrtcStuff.remoteStream);
        },
    },
    components: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        this.initServer();
    },
    beforeUpdate() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {
        if (this.record) {
            this.record.close;
        }
    },
    destroyed() {},
    errorCaptured() {},
};
</script>

<style lang="less" type="text/less" scoped>
/* @import url(); */
#home-page {
    min-height: 100vh;
    width: 100%;
    background: #fafafa;

    .content {
        height: 100%;
        max-width: 500px;
        margin: auto;
        padding-top: 100px;

        .video-box {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            border: 10px solid #86868624;
            border-radius: 10px;
            box-shadow: 0px 2px 7px 1px #60626657;
            video {
                position: absolute;
                width: 100%;
                height: 100%;
                &:focus {
                    outline: -webkit-focus-ring-color auto 0px;
                }
            }
            .recording {
                position: absolute;
                right: 20px;
                top: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                .word {
                    margin-left: 5px;
                    color: #d81e06;
                    font-weight: bold;
                }
            }
        }

        .control-btn {
            margin-top: 100px;
            text-align: center;
        }
    }
}
</style>
