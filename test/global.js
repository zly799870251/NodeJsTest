/**
 * Created by zhangly on 2017/5/22.
 */
/**
 * 全局对象
 * Node.js提供一个全局对象global
 * 所有除global本身以外的全局变量都是它的属性
 *
 * global的根本作用是作为全局变量的宿主
 **/

/**
 * process
 *
 * process是一个全局变量，即global对象的属性
 * 用于描述当前Node.js进程状态的对象，
 * 提供了一个与操作系统的简单接口。
 * 通常在写本地命令行程序的时候使用
 *
 * process.argv:是命令行参数数组，第一个元素是node，第二个元素是脚本文件名，第三个元素开始每个元素是一个运行参数
 * process.stdout:标准输出流，process.stdout.write()函数提供比console.log()更底层的接口。
 * process.stdin:标准输入流，初始时它是被暂停的，要从标准输入流读取数据需要恢复流并手动编写流的事件响应函数
 * process.nextTick(callback):为事件循环设置一项任务，Node.js会在下次事件循环调循环响应时调用callback.
 **/
function argvTest() {
    console.log(process.argv);
}
argvTest();

/**
 * process.nextTick(callback)提供一个工具，用于把复杂事件拆散，变成一个个小事件
 * 将callback推迟到下一个事件执行完毕才执行
 */
function fun1() {
    console.log("第一个方法执行");
}
function fun2() {
    console.log("第二个方法执行");
}
function fun3() {
    console.log("第三个方法执行");
}
function execute() {
    fun1();
    process.nextTick(fun2);
    fun3();
}
execute();