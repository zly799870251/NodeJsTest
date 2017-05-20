/**
 * Created by zhangly on 2017/5/20.
 */
// 阻塞代码实例
var fs1 = require("fs");

var data = fs1.readFileSync('public/input.txt');

console.log(data.toString());
console.log("程序执行结束！fs1");

// 非阻塞代码实例
var fs2 = require("fs");

fs2.readFile('public/input.txt',function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})

console.log("程序执行结束！fs2");

/**
 *  fs3.readFile()是异步函数用于读取文件。
 *  如果发生错误，错误err对象就会输出错误信息
 *  如果没发生错误，readFile跳过err对象的输出
 *  文件内容就通过回调函数输出
 **/
var fs3 = require("fs");

fs3.readFile('public/input.txt',function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
})
console.log("程序执行结束！fs3");