/**
 * Created by zhangly on 2017/5/23.
 */
/**
 * 使用Node创建Web服务器
 *
 * Node.js提供了http模块，http模块主要用于搭建http服务端和客户端
 * 使用http服务器或客户端功能必须调用http模块
 **/

// 引入http模块
var http = require('http');
// 引入文件系统模块
var fs = require('fs');
// 引入url模块
var url = require('url');

// 创建服务器
http.createServer(function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function (err, data) {
        if (err){
            console.error(err);
            // HTTP 状态码 404：Not Found
            // Content Type:text/plain
            response.writeHead(404,{'Content-Type':'text/html'});
        }else {
            // HTTP 状态码 200：OK
            // Content Type:text/plain
            response.writeHead(200,{'Content-Type':'text/html'});

            // 响应文件内容
            response.write(data.toString());
        }

        // 发送响应数据
        response.end();
    });
}).listen(8081);

// 控制台提示信息
console.log('Server running at http://localhost:8081/')