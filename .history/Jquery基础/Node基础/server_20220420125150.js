const Koa = require("koa"); // 引入Koa构造函数
const app = new Koa(); // 创建应用
// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})