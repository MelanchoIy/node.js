const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
<!--这是nodejs.org上的一个列子*/ -->

<!--链式调用-->
 var http =require('http')
 <!--传入匿名回调函数，状态码200表示成功-->
  var server =http.createServer(function(req,res){res.writeHead(返回的状态码,{'文本类型'：'文本类型'})
  res.end("返回内容")
  }).listen(端口号,'127.0.0.1')

  console.log('Server running at http://127.0.0.1:端口号')端口号')