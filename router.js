/*
 * @Description:
 */

//3.1 编写路由模块
function route(handle, pathname){
  console.log("About to route a request for "+ pathname);
  //5.2 处理404及返回调用
  if(typeof handle[pathname]==='function'){
    return handle[pathname]();
  }else{
    console.log("No request handler found for "+ pathname);
    return"404 Not found";
  }
}

exports.route = route;
