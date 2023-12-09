# chrome extension with react antd 

> 项目演示了

### 1 项目关键结构

```

- background            // service worker  脚本目录
    - index.js          // service worker 入口脚本
- content               // 内容脚本目录
    - index.js          // 默认注入到 网页中的脚本
- popup                 // Popup 目录
    - index.js          // Popup 页面入口脚本,  执行 npm run build 讲自动生成 对应的 index.html

- index.html            // Popup 弹出页 html 模板
- manifest.json         // 清单文件
- images                // 系统共享的图片文件
- _dist_                // webpack 编译目录文件,  可基于该目录测试及打包. 
- ...                   // 其他标准 npm 项目标准文件

```

### 开发编译及测试

- 通过使用 `npm run build` 进行编译 ， 并在 chrome 扩展程序中加载测试

