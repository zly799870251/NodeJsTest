/**
 * Created by zhangly on 2017/5/20.
 */
// 请求(require)Node.js自带的http模块，并且把它赋值给http变量
var http = require('http');

// 使用createServer()方法创建服务器，并使用listen方法绑定8888端口
// 函数通过request、response参数接收和响应数据
http.createServer(function (request,response){
    // 发送 http 头部
    // http 状态值：200：OK
    // 内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    // 发送响应数据"Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://localhost:8888');