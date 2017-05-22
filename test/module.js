/**
 * Created by zhangly on 2017/5/22.
 */
/**
 * Node.js模块系统
 *
 * 文件和模块一一对应
 * 模块是Node.js应用程序的基本组成部分
 * 文件可能是javaScript代码、JSON或者编译过的C/C++扩展。
 *
 * Node.js提供exports和require两个对象
 * exports:模块公开的接口
 * require:从外部获取一个模块的接口，即所获取模块的exports对象
 **/

// 创建模块
function createModule() {
    // 引入当前目录下的hello.js文件，./是当前目录，Node.js引入后缀默认.js
    var hello = require('./hello');
    hello.world();
}
// createModule();

// hello.js
function hellojsTest() {
    var Hello = require('./hello');
    var hello = new Hello();
    hello.setName('BYVoid');
    hello.sayHello();
}

/**
 * 服务端模块http
 *
 * var http = require("http");
 *
 * http.createServer(...);
 **/
