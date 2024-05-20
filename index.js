/*
 * @Description: 
 */
var server = require("./server");
//3.3 扩展index.js，使得路由函数可以被注入到服务器
var router = require("./router");
//4.1 依赖注入 引用requestHandlers模块
var requestHandlers = require("./requesthandlers");


//4.2 将一系列请求处理程序通过一个对象来传递，并且需要使用松耦合的方式将这个对象注入到route()函数中。
// 在C++或C#中，当我们谈到对象，指的是类或者结构体的实例。对象根据他们实例化的模板（就是所谓的类），会拥有不同的 属性和方法。但在JavaScript里对象不是这个概念。
// 在JavaScript中，对象就是一个键/值对的集合 -- 你可以把JavaScript的对象想象成一个键为字符串类型的字典。
var handle ={}
handle["/"]= requestHandlers.start;
handle["/start"]= requestHandlers.start;
handle["/upload"]= requestHandlers.upload;


server.start(router.route,handle);