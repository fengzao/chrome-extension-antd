
console.log("welcome to chrome extension  service worker script")


// 该操作和  manifest.json 中 action.default_popup 存在冲突
// 如果希望此处代码执行 需要移除上述配置项
chrome.action.onClicked.addListener(async (tab) => {
    console.log("click " + tab.url)
})

// API:  https://developer.chrome.com/docs/extensions/develop/concepts/messaging?hl=zh-cn
chrome.runtime.onMessage.addListener((req, sender, callback) => {
    console.log("req ===", req);
    callback({
        ts: new Date()
    })
})
