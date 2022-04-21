const Koa = require("koa"); // 引入Koa构造函数
const views = require("koa-views");
const app = new Koa(); // 创建应用

app.use(views(__dirname + "/views"), {
    map:{html:}
})

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})