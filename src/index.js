import App from './App.vue';
import Vue from 'vue';
import '@babel/polyfill'  //为了兼容ES6高级新语法
import "./assets/css/common.less"
import router from './router/index'
import store from './store'//vueX
console.log('我是index.js文件')
// import $ from 'jquery'
console.log($)
import axios from "axios";
// window.$('h2').css({
//     'color': 'green',
//     'fontSize': '25px'
// })
$('h2').css({
    'color': 'green',
    'fontSize': '25px'
})
// console.log(IS_DEV, test, test2)
// import { getUserInfo } from "./api/http.js"
// getUserInfo().then(() => { }, (err) => {
//     console.log(err)
// })
// 1,cors跨域资源共享的方法解决跨域
// axios.get('http://localhost:9999/api/getUserInfo')
//     .then(result => console.log(result))
// 2,使用proxy进行代理服务器进行跨域
// axios.get('/api/getUserInfo')
//     .then(result => console.log(result))


// 模块热更替
// if (module.hot) {
//     module.hot.accept('./lib/hotModule.js', function () {
//         console.log('模块更新了', str)
//         let str = require('./lib/hotModule')
//     })
// }

new Vue({
    // 通过h把App组件挂载到html里面，这里只是声明了渲染的是组件App的内容，还需通过$mount挂载到html的一个节点上面
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
