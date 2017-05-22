/**
 * Created by zhangly on 2017/5/22.
 */
/**
 *  os模块提供了一些基本的系统操作函数
 **/

var os = require("os");

// CPU的字节序
console.log('CPU的字节序：' + os.endianness());

// 操作系统名
console.log('type：' + os.type());

// 操作系统名
console.log('platform：' + os.platform());

// 系统内存总量
console.log('total memory：' + os.totalmem() + 'bytes.');

// 操作系统空闲内存量
console.log('free memory：' + os.freemem() + 'bytes.');