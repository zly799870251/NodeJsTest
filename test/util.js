/**
 * Created by zhangly on 2017/5/22.
 */
/**
 * util是一个Node.js核心模块，提供常用函数的集合，用于弥补核心JavaScript的功能过于精简的不足
 **/

/**
 * util.inherits
 *
 * 用于实现对象间原型继承的函数
 *
 * 仅继承在原型中定义的函数
 * 构造方法内部创造的属性并不会被继承
 * 在原型中定义的属性不会被console.log作为对象的属性输出。
 **/

// 用法示例
function inheritsTest() {
    var util = require('util');
    function Base() {
        this.name = 'base';
        this.base = 1991;
        this.sayHello = function () {
            console.log('Hello ' + this.name);
        }
    }
    Base.prototype.showName = function () {
        console.log(this.name);
    }
    function Sub() {
        this.name = 'sub';
    }
    util.inherits(Sub,Base);
    var objBase = new Base();
    objBase.showName();
    objBase.sayHello();
    console.log(objBase);
    var objSub = new Sub();
    objSub.showName();
    // objSub.sayHello();
    console.log(objSub);
}
// inheritsTest();

/**
 * util.inspect(object,[showHidden],[depth],[colors])
 *
 * 用于将任意对象转换为字符串的方法
 * 至少接受一个Object对象
 *
 * showHidden:可选参数，如果值为true，将会输出更多隐藏信息
 * depth:表示最大递归的层数，如果对象很复杂，你可以指定层数，默认为2层，设置为null将不限递归层数完整遍历对象
 * color:设置为true的话将使用更漂亮的方式输出
 *
 * inspect并不会直接把对象转换为字符串，即使该对象定义的toString方法也不会调用
 **/

// 示例
function inspectTest() {
    var util = require("util");

    function Person() {
        this.name = 'byvoid';
        this.toString = function () {
            return this.name;
        }
    }

    var obj = new Person();

    console.log(util.inspect(obj));
    console.log(util.inspect(obj,true,null,true));
}
inspectTest();

/**
 * util.isArray(object);
 *
 * 如果给定参数是一个数组返回true，否则返回false;
 **/

/**
 * util.isRegExp(object);
 *
 * 如果给定参数是一个正则表达式返回true，否则返回false;
 **/

/**
 * util.isDate(object);
 *
 * 如果给定参数是一个日期返回true，否则返回false;
 **/

/**
 * util.isError(object);
 *
 * 如果给定参数是一个错误对象返回true，否则返回false;
 **/