// 导入http模块:
//import { createServer } from 'http'
// import { createServer } from 'http';
// // 创建http server，并传入回调函数:
// var server = createServer(function (request, response) {
//     // 回调函数接收request和response对象,
//     // 获得HTTP请求的method和url:
//     console.log(request.method + ': ' + request.url)
//     // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
//     response.writeHead(200, {'Content-Type': 'text/html'})
//     // 将HTTP响应的HTML内容写入response:
//     response.end('<h1>Hello world!</h1>')
// })

// // 让服务器监听8080端口:
// server.listen(8080)

// console.log('Server is running at http://127.0.0.1:8080/')



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});