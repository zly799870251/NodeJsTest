/**
 * Created by zhangly on 2017/5/22.
 */
/**
 * Node.js Stream(流)
 *
 * Readable - 可读操作
 * Writable - 可写操作
 * Duplex   - 可读可写操作
 * Transform- 操作被写入数据，然后读出结果
 *
 * 所有的Stream对象都是EventEmitter的实例，常用事件如下。
 * data:当有数据可读时触发。
 * end:没有更多的数据可读时触发。
 * error:在接收和写入的过程中发生错误时触发。
 * finish:所有数据已被写入到底层系统时触发。
 **/

// 读取流
function readerStreamTest() {
    var fs = require("fs");
    var data = '';

    // 创建可读流
    var readerStream = fs.createReadStream('../public/input.txt');

    // 设置编码为utf8
    readerStream.setEncoding('utf8');

    // 处理流事件 --> data,end,and error
    readerStream.on('data', function (chunk) {
        data += chunk;
    });

    readerStream.on('end', function () {
        console.log(data);
    });

    readerStream.on('error', function (err) {
        console.log(err.stack);
    });

    console.log("程序执行完毕");
}
readerStreamTest();

// 写入流
function writeStreamTest() {
    var fs = require("fs");
    var data = '测试文本';

    // 创建一个可以写入的流，写入到文件output.txt中
    var writerStream = fs.createWriteStream('../public/output.txt');

    // 使用utf8编码写入数据
    writerStream.write(data, 'utf8');

    // 标记文件末尾
    writerStream.end();

    // 处理流事件
    writerStream.on('finish',function () {
        console.log('写入完成');
    });

    writerStream.on('err',function (err) {
        console.log(err.stack);
    });

    console.log("程序执行完毕");
}
writeStreamTest();

// 管道流(此操作会覆盖写入)
function sourceStreamTest() {
    var fs = require("fs");

    // 创建一个可读流
    var readerStream = fs.createReadStream('../public/input.txt');

    // 创建一个可写流
    var writerStream = fs.createWriteStream('../public/output.txt');

    // 管道读写操作
    // 读取input.txt文件内容，并将内容写入到output.txt文件中
    readerStream.pipe(writerStream);

    console.log("程序执行完毕");
}
sourceStreamTest();

// 链式流
function compressStreamTest() {
    var fs = require("fs");
    var zlib = require("zlib");

    // 压缩input.txt为文件input.txt.gz
    fs.createReadStream('../public/input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('../public/input.txt.gz'));

    console.log("文件压缩完成");
}
function decompressStreamTest() {
    var fs = require("fs");
    var zlib = require("zlib");

    // 解压input.txt.gz文件为input.txt
    fs.createReadStream('../public/input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input.txt'));

    console.log("文件解压完成");
}
compressStreamTest();
decompressStreamTest();