/**
 * Created by zhangly on 2017/5/25.
 */
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/');
app.set('view engine', 'jade');

app.use(express.static('../../public'));

app.get('/', function (req, res) {
    res.render('index');
});

// 查询列表
app.get('/user_list', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        console.log(data);
        res.render('list', {users: data});
    });
});

// 查询特定用户
app.get('/user_find:id', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.render('list', {users: JSON.stringify({"user": user})});
    });
});

// 跳转到添加页面
app.get('/user_saveUI', function (req, res) {
    res.render('save', {method: 'user_save'});
});

// 将前台传来的对象保存到json中
app.post('/user_save', urlencodedParser, function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        var user = {
            "user4": {
                uid: req.body.uid,
                name: req.body.name,
                age: req.body.age
            }
        }
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.render('list', {users: JSON.stringify(data)});
    });
});

app.get('/user_remove:id', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);

        // todo 无法继续运行被挂起
        delete data["user" + req.params.id];

        console.log(data);
        res.render('list', {users: JSON.stringify(data)});
    });
});

var server = app.listen(8888);