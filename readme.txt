	nojs

优点：
1:部署简单
2：事件驱动
3：异步编程
	(回调函数，事件监听，订阅、发布）
4：高效
5：单线程和多线程

缺点：
！不易阅读
！捕获复杂


 var http =require('http')
 
  var server =http.createServer(function(req,res){res.writeHead(端口号,{''})})