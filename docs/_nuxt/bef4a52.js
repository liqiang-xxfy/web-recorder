(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{352:function(e,t,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("213197c0",content,!0,{sourceMap:!1})},353:function(e,t,n){e.exports=n.p+"img/video-back.6d16448.webp"},354:function(e,t,n){"use strict";n(352)},355:function(e,t,n){var o=n(55)(!1);o.push([e.i,".container[data-v-5a13ec68]{margin:0 auto;padding-bottom:56.25%}.container .video-player-box[data-v-5a13ec68]{position:absolute;width:100%;height:100%}.container .video-player-box[data-v-5a13ec68] >div{width:100%;height:100%}.container .video-player-box[data-v-5a13ec68] >div .vjs-big-play-button{display:none}@media only screen and (max-width:500px){.container[data-v-5a13ec68]{padding-bottom:133.33%}}",""]),e.exports=o},356:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{playsinline:!0,playerOptions:{muted:!0,sources:[],autoplay:!0,poster:n(353)}}},mounted:function(){},methods:{onPlayerPlay:function(e){},onPlayerPause:function(e){},onPlayerEnded:function(e){},onPlayerLoadeddata:function(e){},onPlayerWaiting:function(e){},onPlayerPlaying:function(e){},onPlayerTimeupdate:function(e){},onPlayerCanplay:function(e){},onPlayerCanplaythrough:function(e){},playerStateChanged:function(e){},playerReadied:function(e){}}},r=(n(354),n(45)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("div",{directives:[{name:"video-player",rawName:"v-video-player:myVideoPlayer",value:e.playerOptions,expression:"playerOptions",arg:"myVideoPlayer"}],staticClass:"video-player-box",attrs:{playsinline:e.playsinline},on:{play:function(t){return e.onPlayerPlay(t)},pause:function(t){return e.onPlayerPause(t)},ended:function(t){return e.onPlayerEnded(t)},loadeddata:function(t){return e.onPlayerLoadeddata(t)},waiting:function(t){return e.onPlayerWaiting(t)},playing:function(t){return e.onPlayerPlaying(t)},timeupdate:function(t){return e.onPlayerTimeupdate(t)},canplay:function(t){return e.onPlayerCanplay(t)},canplaythrough:function(t){return e.onPlayerCanplaythrough(t)},ready:e.playerReadied,statechanged:function(t){return e.playerStateChanged(t)}}})])}),[],!1,null,"5a13ec68",null);t.default=component.exports},357:function(e,t,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("264e3354",content,!0,{sourceMap:!1})},361:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));n(44),n(35),n(43),n(76),n(36),n(77),n(58),n(59),n(60),n(61);var o=n(6),r=n(33);n(62),n(28),n(362),n(14),n(29),n(37),n(229),n(57);function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function v(e){var t=this;(e=e||{}).onended="function"==typeof e.onended?e.onended:v.noop,e.onerror="function"==typeof e.onerror?e.onerror:v.noop,e.onStartRecord="function"==typeof e.onStartRecord?e.onStartRecord:v.noop,e.onFinishRecord="function"==typeof e.onFinishRecord?e.onFinishRecord:v.noop;var n,r,d,l,h,m=v.options?f({},v.options):{};function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t||{},e.abrupt("return",new Promise((function(e,o){n?navigator.mediaDevices.getDisplayMedia(t).then((function(t){e(t)})).catch((function(e){o(!1)})):navigator.mediaDevices.getUserMedia(t).then((function(t){e(t)})).catch((function(e){o(!1)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=new Blob(e,{type:v.options.mimeType}),n=URL.createObjectURL(t),a=document.createElement("a");document.body.appendChild(a),a.style="display: none",a.href=n;var o=(new Date).toLocaleString();return a.download=o,{element:a,name:o,url:n}}this.setOption=function(option){m=f(f({},m),option)},this.start=function(){var c=Object(o.a)(regeneratorRuntime.mark((function o(c,f){var w,P,k;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(w=[],v.support){o.next=3;break}return o.abrupt("return",!1);case 3:if(c,!v.isRunTime){o.next=12;break}return o.next=7,window.showSaveFilePicker(m.opts);case 7:return n=o.sent,o.next=10,n.createWritable();case 10:r=o.sent,console.log("writableStream:",r);case 12:return o.next=14,y({audio:!0,video:!0},f);case 14:if(P=o.sent){o.next=17;break}return o.abrupt("return",!1);case 17:if(h=P,(k=P.getVideoTracks().length&&P.getVideoTracks()[0])&&(k.onended=function(){t.stop()}),(d=new MediaRecorder(P,{mimeType:m.mimeType})).ondataavailable=function(t){if(console.log("data-available:",t.data),v.isRunTime){if(l&&t.data.size>0)r.write(t.data);else if(!l&&r)try{r.close().then((function(){e.onFinishRecord()}))}catch(e){console.log(e)}}else l&&t.data.size>0?w.push(t.data):l||e.onFinishRecord(x(w))},!c){o.next=33;break}console.log('"srcObject" in video',"srcObject"in c),o.prev=24,c||"srcObject"in c?c.srcObject=P:c.src=window.URL.createObjectURL(P),c.play(),o.next=33;break;case 29:return o.prev=29,o.t0=o.catch(24),console.log("error",o.t0),o.abrupt("return",!1);case 33:return l=setInterval((function(){"recording"===d.state&&d.requestData()}),1e3),d.start(),e.onStartRecord(),o.abrupt("return",!0);case 37:case"end":return o.stop()}}),o,null,[[24,29]])})));return function(e,t){return c.apply(this,arguments)}}(),this.stop=function(){if(console.log("stopping"),v.support&&(l&&clearInterval(l),l="",d&&"inactive"!==d.state)){d.stop();var e,t=c(h.getTracks());try{for(t.s();!(e=t.n()).done;){var n=e.value;n&&n.stop()}}catch(e){t.e(e)}finally{t.f()}}},this.close=function(){if(r)try{r.close().then((function(){e.onFinishRecord()}))}catch(e){console.log(e)}},this.download=function(){v.support}}v.init=function(e,t){v.options=f({mimeType:"video/webm; codecs=vp9",opts:{types:[{description:"video",accept:{"video/webm":[".webm"]}}]}},e),v.noop=function(){},(t=t||{}).success="function"==typeof t.success?t.success:v.noop,t.error="function"==typeof t.error?t.error:v.noop;var n=e.browser;("Chrome"===n.name||"Edge"===n.name)&&Number(n.major)>=86&&window.showSaveFilePicker,v.isRunTime=!1,void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(n,o){t.call(navigator,e,n,o)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),void 0===navigator.mediaDevices.getDisplayMedia&&(navigator.mediaDevices.getDisplayMedia=function(e){var t=navigator.getDisplayMedia;return t?new Promise((function(n,o){t.call(navigator,e,n,o)})):Promise.reject(new Error("getDisplayMedia is not implemented in this browser"))}),window.MediaRecorder?(v.support=!0,t.success()):(t.error("no support"),v.support=!1)}},365:function(e,t,n){"use strict";n(357)},366:function(e,t,n){var o=n(55)(!1);o.push([e.i,"#home-page[data-v-35cd2ad2]{min-height:100vh;width:100%;background:#fafafa}#home-page .content[data-v-35cd2ad2]{height:100%;max-width:750px;margin:auto;padding-top:50px;padding-bottom:50px}#home-page .content .video-box[data-v-35cd2ad2]{position:relative;width:100%;border:10px solid hsla(0,0%,52.5%,.14118);border-radius:10px;box-shadow:0 2px 7px 1px rgba(96,98,102,.34118)}#home-page .content .video-box .video-palyer[data-v-35cd2ad2]{width:100%;height:100%}#home-page .content .video-box .recording[data-v-35cd2ad2]{position:absolute;right:20px;top:20px;display:flex;align-items:center;justify-content:center}#home-page .content .video-box .recording .word[data-v-35cd2ad2]{margin-left:5px;color:#d81e06;font-weight:700}#home-page .content .control-btn[data-v-35cd2ad2]{margin-top:50px;text-align:center}#home-page .content .download-box[data-v-35cd2ad2]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-start;align-items:flex-start;margin-top:50px;text-align:center}#home-page .content .download-box .download-item[data-v-35cd2ad2]{padding:10px;width:240px;margin-top:5px;border-radius:5px}#home-page .content .download-box .download-item .url-video-box[data-v-35cd2ad2]{width:100%;height:135px;border-radius:5px;overflow:hidden;background:#000;box-shadow:0 2px 7px 1px rgba(96,98,102,.34118)}#home-page .content .download-box .download-item .url-video-box video[data-v-35cd2ad2]{width:100%;height:100%}#home-page .content .download-box .download-item .meta-box[data-v-35cd2ad2]{font-size:15px;color:#666;margin-top:5px}#home-page .content .download-box .download-item .meta-box .title[data-v-35cd2ad2]{word-break:break-all}#home-page .content .download-box .download-item .meta-box .download-link[data-v-35cd2ad2]{color:#3989f7;cursor:pointer}@media only screen and (max-width:500px){#home-page .content[data-v-35cd2ad2]{padding-top:40px;max-width:300px}#home-page .content .control-btn[data-v-35cd2ad2]{margin-top:40px}#home-page .content .download-box[data-v-35cd2ad2]{justify-content:center;margin-top:40px}}",""]),e.exports=o},369:function(e,t,n){"use strict";n.r(t);n(57),n(359);var o=n(360),r=n.n(o),c={name:"index",data:function(){return{record:null,recording:!1,flicker:!1,setIntervalId:"",downloadEl:[],videoEl:null}},props:[],watch:{recording:function(e,t){var n=this;e?(this.flicker=!0,this.setIntervalId=setInterval((function(){n.flicker=!n.flicker}),500)):(this.setIntervalId&&clearInterval(this.setIntervalId),this.setIntervalId="",this.flicker=!1)}},computed:{},components:{VideoPlayer:n(356).default},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){window._this=this,this.initServer();try{var e=this.$refs["video-palyer"].myVideoPlayer;if(this.videoEl=e.tech&&e.tech({IWillNotUseThisInPlugins:!0}).el()||null,!this.videoEl)throw console.log("no video node"),new Error("no video")}catch(e){var t=document.querySelector("video");t&&(this.videoEl=t)}},methods:{initServer:function(){var e=this,t=new r.a;console.log("uaObj",t.getBrowser());var o=n(361).default;o.init({browser:t.getBrowser()}),this.record=new o({onended:function(){},onerror:function(){},onStartRecord:function(){e.recording=!0,window.onbeforeunload=function(){return""},window.onunload=function(){return""}},onFinishRecord:function(t){t&&t.element?(e.downloadEl.push(t),e.recording=!1,e.$message({message:"录制完成,请下载！",type:"success"})):(e.$message({message:"录制已完成！",type:"success"}),e.recording=!1,window.onbeforeunload="",window.onunload="")}})},startRecord:function(e){this.videoEl&&(console.log("开始录制------"),this.record.start(this.videoEl,e).then((function(e){console.log("rsep",e)})).catch((function(e){console.log("error:",e)})))},stopRecord:function(){this.record&&this.record.stop()},downloadRecord:function(){console.log("下载录制------"),window.record.download(Object.values(this.remoteHandles)[0].webrtcStuff.remoteStream)}},beforeUpdate:function(){},updated:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){this.record&&this.record.close},destroyed:function(){},errorCaptured:function(){}},d=(n(365),n(45)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home-page"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"video-box"},[n("VideoPlayer",{ref:"video-palyer",staticClass:"video-palyer"}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.flicker&&e.recording,expression:"flicker && recording"}],staticClass:"recording"},[n("svg",{staticClass:"icon",attrs:{t:"1618921750477",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"548",width:"18",height:"18"}},[n("path",{attrs:{d:"M5.12 512c0 280.064 226.816 506.88 506.88 506.88s506.88-226.816 506.88-506.88-226.816-506.88-506.88-506.88S5.12 231.936 5.12 512z",fill:"#D81E06","p-id":"549"}})]),e._v(" "),n("span",{staticClass:"word"},[e._v("REC")])])],1),e._v(" "),n("div",{staticClass:"control-btn"},[e.recording?e._e():n("el-button",{key:"screen-record",attrs:{type:"primary"},on:{click:function(t){return e.startRecord(!0)}}},[e._v("录制屏幕")]),e._v(" "),e.recording?n("el-button",{key:"stop-record",attrs:{type:"warning"},on:{click:e.stopRecord}},[e._v("停止录制")]):n("el-button",{key:"camera-record",attrs:{type:"primary"},on:{click:function(t){return e.startRecord(!1)}}},[e._v("录制摄像头")])],1),e._v(" "),n("div",{staticClass:"download-box"},e._l(e.downloadEl,(function(t,o){return n("div",{key:t.name+o,staticClass:"download-item"},[n("div",{staticClass:"url-video-box"},[n("video",{attrs:{src:t.url,preload:"false",playsinline:"playsinline","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:""}})]),e._v(" "),n("div",{staticClass:"meta-box"},[n("span",{staticClass:"title"},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"download-link",on:{click:function(){return t.element.click()}}},[e._v("下载")])])])})),0)])])}),[],!1,null,"35cd2ad2",null);t.default=component.exports;installComponents(component,{VideoPlayer:n(356).default})}}]);