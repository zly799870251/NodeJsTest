/**
 * Created by zhangly on 2017/5/23.
 */
var express = require('express');
var app = express();

// 主页输出HelloWorld

// GET 请求
app.get('/',function (request, response) {
    console.log("主页 GET 请求");
    response.send('Hello GET');
});

// POST 请求
app.post("/",function (request, response) {
    console.log("主页 POST 请求");
    response.send('Hello POST');
});

// /del_user 页面响应
app.delete('/del_user',function (request, response) {
    console.log("／del_user 响应 DELETE 请求");
    response.send('删除页面');
});

// /list_user 页面 GET 请求
app.get('/list_user',function (request, response) {
    console.log("/list_user GET 请求");
    response.send('用户列表页面');
});

// 对页面 abcd,abxcd,ab123cd,等响应 GET 请求
app.get('/ab*cd',function (request, response) {
    console.log("/ab*cd GET 请求");
    response.send('正则匹配');
});

var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s",host,port);
});