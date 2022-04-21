const Koa = require("koa"); // 引入Koa构造函数
const app = new Koa(); // 创建应用
const router = require("koa-router")();
const views = require("koa-views");
const parser = require("koa-parser");
const session = require("koa-session");
// 设置密钥(这边我们手动设置)
app.keys = ["123456"]

app.use(parser());

// 设置路径，并且告知使用的模板引擎为：nunjucks
app.use(views(__dirname + "/views", {
    map: {
        html: "nunjucks"
    }
}))

// 设置session
app.use(session({
    maxAge: 3000
}, app));

// 首页路由
// ctx：上下文对象
router.get("/", async (ctx) => {
    await ctx.render("index.html")
})

// 登录页：任何用户都可以访问
// get请求
router.get("/login", async (ctx) => {
    await ctx.render("login.html")
})

app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})