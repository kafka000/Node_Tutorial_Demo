/*
 * @Description: 
 */

//第一行请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。
var http = require("http");

//我们把我们的服务器脚本放到一个叫做 start 的函数里，然后我们会导出这个函数。
function start(){
  //接下来我们调用http模块提供的函数： createServer 。
  function onRequest(request, response){
    console.log("Request received.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;