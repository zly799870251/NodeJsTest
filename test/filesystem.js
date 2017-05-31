/**
 * Created by zhangly on 2017/5/22.
 */
/**
 * Node.js文件系统
 *
 * 文件系统封装在fs模块中
 * 提供了文件的读取，写入，更名，删除，遍历目录，链接等POSIX文件系统操作
 *
 * fs模块中所有操作都提供了同步和异步两个版本，如：
 * fs.readFile()和fs.readFileSync()
 **/

/**
 * Node.js读取文件函数语法
 *
 * fs.readFile(filename,[encoding],[callback(err,data)])
 *
 * filename:必选，表示要读取的文件名
 * encoding:可选，表示文件的字符编码
 * callback:回调函数，用于接受文件的内容
 * err表示有没有错误发生，data是文件内容
 * 如果指定了encoding，data是一个解析后的字符串，否则data将会是以Buffer形式表示的二进制数据。
 *
 * 如果不指定encoding,则callback就是第二个参数
 **/

function noEncoding() {
    var fs = require('fs');
    fs.readFile('../public/input.txt',function (err, data) {
        if(err){
            console.error(err);
        }else {
            console.log(data);
        }
    });
}
// noEncoding();

function doEncoding() {
    var fs = require('fs');
    fs.readFile('../public/input.txt','utf-8',function (err, data) {
        if(err){
            console.error(err);
        }else {
            console.log(data);
        }
    });
}
// doEncoding();

/**
 * fs.readFileSync
 *
 * fs.readFileSync是fs.readFile同步的版本
 * 接受的参数和fs.readFile相同，而读取到的文件内容会以函数返回值的形式返回。
 * 如果有错误发生，fs将会抛出异常，需要用try和catch捕获处理异常
 *
 * 与同步I/O函数不同，异步函数大多没有返回值。
 **/

/**
 * 打开文件语法
 *
 * fs.open(path,flags,[mode],[callback(err,fd)])
 *
 * path:文件路径
 * flags:可以为以下值
 * r:以读取模式打开
 * r+:以读写模式打开
 * w:以写入模式打开，不存在则创建
 * w+:以读写模式打开，不存在则创建
 * a:以追加模式打开文件，不存在则创建
 * a+:以读取追加模式打开文件，不存在则创建
 **/

/**
 * 读取文件
 *
 * fs.read(fd,buffer,offset,length,position,[callback(err,bytesRead,buffer)])
 *
 * fd:读取数据并写入buffer指向的缓冲区对象
 * offset:是buffer的写入偏移量
 * length:是要从文件中读取的字节数
 * position:是文件读取的起始位置，如果position为null，则会从当前文件指针的位置读取
 * callback:回调函数传递bytesRead和buffer，分别表示读取的字节数和缓冲区对象
 **/

// 示例
function openReadTest() {
    var fs = require('fs');
    fs.open('../public/input.txt','r',function (err, fd) {
        if (err){
            console.error(err);
            return;
        }
        var buf = new Buffer(8);
        fs.read(fd,buf,0,8,null,function (err, bytesRead, buffer) {
            if (err){
                console.error(err);
                return;
            }
            console.log('bytesRead: ' + bytesRead);
            console.log(buffer);
        })
    });
}
openReadTest();

/**
 * 一般来说非必要情况下不要使用这种方式读取文件
 * 因为它要求你手动管理缓冲区和文件指针
 * 尤其是在文件大小未知的情况下
 **/