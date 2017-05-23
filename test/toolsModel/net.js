/**
 * Created by zhangly on 2017/5/23.
 */
/**
 * Node.js Net模块提供了一些用于底层网络通信的小工具
 * 包含了创建服务端／客户端的方法
 */

// 引入Net模块
var net = require('net');

/**
 * 创建一个TCP服务器
 *
 * net.createServer([options],[connectionListener])
 *
 * options:端口号
 * connectionListener:自动给connection事件创建监听器
 */

/**
 * 返回一个新的'net.Socket'，并连接到指定的地址和端口
 *
 * net.connect([options],[connectionListener])
 *
 * options:端口号
 *
 * 当socket建立的时候，将会触发'connect'事件
 */