/**
 * Created by zhangly on 2017/5/22.
 */
var server = require("./Route");
var router = require("./router");

server.start(router.route);