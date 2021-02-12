import Vue from 'vue';
import App from './App.vue';
// import "./assets/css/common.less"
import '@babel/polyfill'  //为了兼容ES6高级新语法

console.log('你好啊，哈哈哈哈哈');
console.log('你好啊，哈哈哈哈哈');
console.log('你好啊，哈哈哈哈哈');
setTimeout(function () {
    console.log('没有箭头函数1秒后执行了')
}, 1000)
setTimeout(() => {
    console.log('有箭头函数1秒后执行了')

}, 1000)
class Person {
    constructor(name) {
        this.name = name
        console.log('构造函数初始化')
    }
}

class Dog {
    name = "大黄"
    static color = "yellow"

}
let d = new Dog()
console.log(d)
console.dir(d)

// 使用generator函数
function* fn() {
    yield 1;
    yield 2;
    yield 3;
    return;
}
var ff = fn();
console.log(ff.next())
console.log(ff.next())
console.log(ff.next())
console.log(ff.next())
let str = '123'
console.log(str.includes('2'))
new Vue({
    // 通过h把App组件挂载到html里面，这里只是声明了渲染的是组件App的内容，还需通过$mount挂载到html的一个节点上面
    render: (h) => h(App)
}).$mount();