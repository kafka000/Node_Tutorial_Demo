/*
 * @Description: 
 */
var server = require("./server");
//3.3 扩展index.js，使得路由函数可以被注入到服务器
var router = require("./router");

server.start(router.route);