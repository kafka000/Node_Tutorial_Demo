/*
 * @Description: 
 */

//1.1 第一行请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。
var http = require("http");
//2.1 引用url模块
var url = require("url");
//3.2 依赖注入 引用router模块
var route = require("./router");

//1.2 我们把我们的服务器脚本放到一个叫做 start 的函数里，然后我们会导出这个函数。
function start(route, handle){
  // 1.3 接下来我们调用http模块提供的函数： createServer 。
  function onRequest(request, response){
    //2.2 通过请求的URL路径来区别不同请求
    var pathname = url.parse(request.url).pathname
    //3.2 我们将使用依赖注入的方式较松散地添加路由模块
    //4.2 这样我们就在start()函数里添加了handle参数，并且把handle对象作为第一个参数传递给了route()回调函数。
    console.log("Request for "+ pathname +" received.");    
    response.writeHead(200,{"Content-Type":"text/plain"});

    //5.3 调用路由并改写返回
    var content = route(handle, pathname)
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;