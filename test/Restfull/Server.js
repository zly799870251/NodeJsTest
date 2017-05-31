/**
 * Created by zhangly on 2017/5/25.
 */
var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/');
app.set('view engine', 'jade');

app.use(express.static('../../public'));

app.get('/',function (req, res) {
    res.render('index');
});

// 查询列表
app.get('/user_list',function (req, res) {
    fs.readFile( __dirname + "/users.json", 'utf8', function (err, data) {
        console.log( data );
        res.render('list',{users:JSON.stringify(data
    });
});

// 将前台传来的对象保存到json中
app.get('/user_save',function (req, res) {
    
});

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application启动于 http://" + host + ":" + port);
});