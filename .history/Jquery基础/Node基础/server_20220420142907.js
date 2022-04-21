const Koa = require("koa"); // 引入Koa构造函数
const router = require("Koa-router")(); //引入并执行Koa-router
const static = require("Koa-static")
const app = new Koa(); // 创建应用

app.use(static(__dirname+""))

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})