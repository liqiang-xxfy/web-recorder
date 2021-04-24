var fs = require("fs");
// var path = require("path");
export default {
    target: "static",
    server: {
        port: 3003,
        host: "0.0.0.0",
        https: {
            key: fs.readFileSync("./key.pem"),
            cert: fs.readFileSync("./cert.pem"),
            // ca: fs.readFileSync('./ca.pem')
        },
    },
    generate: {
        subFolders: false,
        dir: "docs",
    },
    //generate时修改相对路径
    router: {
        // base: "./",
        // mode: "hash",
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "免费在线录制",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { hid: "keywords", name: "keywords", content: ["在线", "屏幕录制", "摄像头录制", "免费", "在线录屏"] },
            { hid: "description", name: "description", content: "免费在线屏幕录制，摄像头录制" },
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["element-ui/lib/theme-chalk/index.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["@/plugins/element-ui"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },
};
