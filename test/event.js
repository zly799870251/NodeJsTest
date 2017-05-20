/**
 * Created by zhangly on 2017/5/20.
 */
// Node.js所有的异步I/O操作在完成时都会发送一个事件到事件队列
/**
 * 一个net.Server对象会在每次有新连接时分发一个事件
 * 一个fs.readStream对象会在文件被打开的时候发出一个事件
 * 所有这些产生事件的对象都是events.EventEmitter的实例
 * 可以通过require("events");来访问该模块
 **/

var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some_event', function () {
    console.log('some_event occured');
});

setTimeout(function () {
    event.emit('some_event');
}, 1000);

/**
 * event对象注册了事件some_event的一个监听器
 * 然后通过setTimeout在1000毫秒后向event对象发送事件some_event
 * 此时会调用some_event的监听器
 **/

/**
 * EventEmitter的核心就是事件发射与事件监听器功能的封装。
 * EventEmitter的每个事件由一个事件名和若干个参数组成
 * 对于每个事件，EventEmitter支持若干个事件监听器
 * 当事件发送时，注册到这个事件的事件监听器被一次调用
 * 事件参数作为回调函数参数传递
 **/

var events2 = require('events');

var emitter = new events2.EventEmitter();

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'byvoid', 1991);

var server = new EventEmitter();

// EventEmitter.emit(event,[arg1],[arg2],[...])发射event事件，传递若干可选参数到事件监听器的参数列表

// EventEmitter.once(event,listener)为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除该监听器
server.once('connection',function (stream) {
    console.log('This is once()!' + stream);
})

// EventEmitter.removeListener(event,listener)移除指定事件监听器
var callback = function (stream) {
    console.log("someone connected!");
}

server.on('connection',callback);

server.removeListener('connection',callback);

server.emit('connection','StreamParam');

// EventEmitter.removeAllListeners([event])移除所有事件的所有监听器，则移除指定事件的所有监听器

/**
 * 异常的时候通常会发射 error 事件
 * 当 error 被发射时，EventEmitter 规定如果没有响 应的监听器
 * Node.js 会把它当作异常，退出程序并打印调用栈
 * 一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃
 */
var events3 = require('events');
var emitter3 = new events3.EventEmitter();
emitter3.emit('error');