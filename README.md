# vue-manage-system
基于Vue.js 2.x系列 + element-ui 内容管理系统解决方案

简单用法
（1）安装依赖 npm install
（2）运行 npm run dev
（3）在浏览器输入 http://localhost:9999/#/
（4）浏览器如果正常输出，运行成功

主要代码说明
​	│index.html
​	|
​	├─build
​	│
​	├─config
​	│
​	├─src
​	│ │　　App.vue
​	│ │　　main.js
​	│ │
​	│ ├─common
​	│ │　　　　request.js　（封装通用http请求，基于axios和promist）
​	│ │
​	│ ├─components
​	│ │　　　　HelloWorld.vue
​	│ │
​	│ ├─router
​	│ │　　　　index.js
​	│ │
​	│ └─services
​	│　　　　　　ApiBase.js （对接后端通用基类）
​	│　　　　　　LoginService.js　（和后端对接具体逻辑，这里是用登陆做例子）
​	│
​	└─static
