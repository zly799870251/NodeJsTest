/**
 * Created by zhangly on 2017/6/1.
 */
/**
 * Node.js是以单线程的模式运行的，但它使用的是事件驱动来处理并发
 * 这样有助于我们在多核CPU的系统上创建多个子进程，从而提高性能。
 *
 * 每个子进程总是带有三个流对象：
 * child.stdin
 * child.stdout
 * child.stderr
 * 它们可能会共享父进程的stdio流
 * 或者也可以是独立的被导流的流对象。
 *
 * Node提供了child_process模块来创建子进程，方法有
 * exec - child_process.exec 使用子进程执行命令，缓存子进程的输出，将子进程的输出以回调函数参数的形式返回
 * spawn - child_process.spawn 使用指定的命令行参数创建新进程
 * fork - child_process.fork 是spawn()的特殊形式，用于在子进程中运行的模块，
 * 如fork('./son.js')相当于spawn('node',['./son.js'])。与spawn方法不同的是
 * fork会在父进程与子进程之间建立一个通信管道，用于进程之间的通信。
 **/

/**
 * child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
 * child_process.exec(command,[options],callback);
 *
 * command:字符串，将要运行的命令，参数使用空格隔开
 * options:对象，可以是：
 *      cwd: 字符串，子进程的当前工作目录
 *      env: 对象，环境变量键值对
 *      encoding: 字符串，字符编码(默认:'utf8')
 *      shell: 字符串，将要执行命令的Shell
 *      timeout: 数字，超时时间(默认:0)
 *      maxBuffer: 数字，在stdout或stderr中允许存在的最大缓冲(二进制)，如果超出那么子进程会被杀死(默认:200*1024)
 *      killSignal: 字符串，结束信号(默认:'SIGTERM')
 *      uid: 数字，设置用户进程的ID
 *      gid: 数字，设置进程组的ID
 * callback: 回调函数，包含3个参数error,stdout和stderr。
 * exec()方法返回最大的缓冲区，并等待进程结束，一次性返回缓冲区的内容
 **/

/**
 * child_process.spawn 使用指定的命令行参数创建新进程，语法格式如下
 * child_process.spawn(command,[args],[options])
 *
 * command: 将要运行的命令
 * args: Array字符串参数数组
 * options: 对象，可以是
 *      cwd: 字符串，子进程的当前工作目录
 *      env: 对象，环境变量键值对
 *      stdio: 数组或字符串，子进程的stdio配置
 *      detached 布尔值，这个子进程将会变成进程组的领导
 *      uid: 数字，设置用户进程的ID
 *      gid: 数字，设置进程组的ID
 * spawn()方法返回流(stdout & stderr)，在进程返回大量数据时使用。
 * 进程一旦开始执行时spawn()就开始接收响应。
 **/

/**
 * child_process.fork是spawn()方法的特殊形式，用于创建进程，语法格式如下
 * child_process.fork(modulePath,[args],[options])
 *
 * modulePath: 字符串，将要在子进程中运行的模块
 * args: Array字符串参数数组
 * options: 对象，可以是
 *      cwd: 字符串，子进程的当前工作目录
 *      env: 对象，环境变量键值对
 *      execPath: 字符串，创建子进程的可执行文件
 *      execArgv: 数组，子进程的可执行文件的字符串参数数组(默认:process.execArgv)
 *      silent: 布尔值，如果为true，子进程的stdin,stdout和stderr将会被关联至父进程，否则，他们将会从父进程中继承。
 *      uid: 数字，设置用户进程的ID
 *      gid: 数字，设置进程组的ID
 * 返回的对象除了拥有ChildProcess实例所有方法，还有一个内建的通信信道。
 **/