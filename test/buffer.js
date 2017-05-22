/**
 * Created by zhangly on 2017/5/22.
 */
// 创建长度为10的Buffer实例
var buf1 = new Buffer(10);

// 通过给定数组来创建Buffer实例
var buf2 = new Buffer([10, 20, 30, 40, 50]);

// 通过字符串来创建Buffer实例
var buf3 = new Buffer("www.w3c.cn", "utf-8");
// utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

/**
 * 写入Node缓冲区的语法
 *
 * buf1.write(string,[offset],[length],[encoding]);
 *
 * string:写入缓冲区的字符串
 * offset:缓冲区开始写入的索引值，默认为0
 * length:写入的字节数，默认为buffer.length
 * encoding:使用的编码，默认为'utf8'。
 *
 * 返回值
 * 返回实际写入的大小。如果buffer空间不足，则只会写入部分字符串。
 **/

// 实例
var buf4 = new Buffer(256);
var len = buf4.write("www.w3cschool.cn");
console.log("写入字节数：" + len);

/**
 * 读取Node缓冲区数据的语法
 *
 * buf.toString([encoding],[start],[end]);
 *
 * encoding:使用的编码。默认为'utf8'。
 * start:指定开始读取的索引位置，默认为0。
 * end:结束位置，默认为缓冲区的末尾。
 *
 * 返回值
 * 解码缓冲区数据并使用指定的编码返回字符串。
 **/

// 实例
var buf5 = new Buffer(26);
for (var i = 0; i < buf5.length; i++) {
    buf5[i] = i + 97;
}
console.log(buf5.toString('ascii'));
console.log(buf5.toString('ascii', 0, 5));
console.log(buf5.toString('utf8', 0, 5));
console.log(buf5.toString(undefined, 0, 5));

/**
 * 将Buffer转换为JSON对象的语法
 *
 * buf.toJSON();
 *
 * 返回值
 * 返回JSON对象。
 **/

// 实例
var buf6 = new Buffer('www.w3cschool.cn');
var json = buf6.toJSON();
console.log(json);

/**
 * 缓冲区合并的语法
 *
 * Buffer.concat(list,[totalLength]);
 *
 * list:用于合并的Buffer对象数组列表
 * totalLength:指定合并后Buffer对象的总长度
 *
 * 返回值
 * 返回一个多个成员合并的新Buffer对象。
 **/

// 实例
var buffer1 = new Buffer('W3Cschool教程');
var buffer2 = new Buffer('www.w3cschool.cn');
var buffer3 = new Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容：" + buffer3.toString());

/**
 * 缓冲区比较的语法
 *
 * buf.compare(otherBuffer);
 *
 * otherBuffer:与buf对象比较的另一个Buffer对象。
 *
 * 返回值
 * 返回一个数字，表示buf在otherBuffer之前、之后或相同。
 **/

// 实例
var buffer4 = new Buffer('A');
var buffer5 = new Buffer('BCD');
var result = buffer4.compare(buffer5);

if (result < 0) {
    console.log(buffer4 + " 在 " + buffer5 + "之前");
} else if (result == 0) {
    console.log(buffer4 + " 与 " + buffer5 + "相同");
} else {
    console.log(buffer4 + " 在 " + buffer5 + "之后");
}

/**
 * 拷贝缓冲区的语法
 *
 * buf.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd]);
 *
 * targetBuffer:要拷贝的Buffer对象。
 * targetStart:数字，可选，默认0。
 * sourceStart:数字，可选，默认0.
 * sourceEnd:数字，可选，默认：buffer.length
 *
 * 无返回
 **/

// 实例
var buffer6 = new Buffer('ABC');
//拷贝一个缓冲区
var buffer7 = new Buffer('AB   C');
buffer6.copy(buffer7,2,0,2);
console.log("buffer7 content:" + buffer7.toString());

/**
 * 裁剪缓冲区的语法
 *
 * buf.slice([start],[end]);
 *
 * start:裁剪起始位置，默认0。
 * end:裁剪终止位置，默认buffer.length。
 *
 * 返回值
 * 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，从索引start到end的裁剪。
 **/

// 实例
var buffer8 = new Buffer('youj');
// 剪切缓冲区
var buffer9 = buffer8.slice(0,2);
console.log("buffer9 content:" + buffer9.toString());

/**
 * 缓冲区长度的语法
 *
 * buf.length;
 *
 * 返回值
 * 返回Buffer对象所占据的内存长度。
 **/

// 实例
var buffer10 = new Buffer('www.w3cschool.cn');
// 缓冲区长度
console.log("buffer10 length:" + buffer10.length);