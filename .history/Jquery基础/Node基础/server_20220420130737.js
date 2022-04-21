const Koa = require("koa"); // 引入Koa构造函数
const router = require("Koa-router")(); //引入并执行Koa-router
const app = new Koa(); // 创建应用

// 首页
router.get("/", async (ctx) => {
    ctx.body = "home page";
})

// 视频页面
router.get("/video", async (ctx) => {
    ctx.body = "video page";
})

// 将router加入app(应用)
app.use(router.)

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})