const Koa = require("koa"); // 引入Koa构造函数
const router = require("koa-router")(); //引入并执行Koa-router
const static = require("koa-static")
const app = new Koa(); // 创建应用

app.use(static(__dirname + "/public"))


// 首页
router.get("/", async (ctx) => {
    ctx.body = "home page";
})

// 视频页面
router.get("/video", async (ctx) => {
    ctx.body = "video page";
})

// 将router加入app(应用)
app.use(router.routes());

// __表示当前项目的绝对路径
console.log(__dirname);

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})