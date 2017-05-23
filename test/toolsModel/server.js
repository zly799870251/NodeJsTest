/**
 * Created by zhangly on 2017/5/23.
 */
// 引入Net模块
var net = require("net");

// 实例
var server = net.createServer(function (connection) {
    console.log('client connected');
    connection.on('end',function () {
        console.log('客户端关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});
server.listen(8080,function () {
    console.log('server is listening');
});