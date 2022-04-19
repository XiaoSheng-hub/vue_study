const http = require("http")

// 创建服务器(给服务器发送请求后，服务器会给客户端返回hello world)
const server = http.createServer((req, res) => {
    res.end("hello world");
})

// 设置端口
server.listen(3000, () => {

})