const Koa = require("koa"); // 引入Koa构造函数
const app = new Koa(); // 创建应用
const router = require("koa-router")();
const views = require("koa-views");
const session = require("koa-session");
// 设置密钥(这边我们手动设置)
app.keys = ["123456"]


// 设置路径，并且告知使用的模板引擎为：nunjucks
app.use(views(__dirname + "/views", {
    map: {
        html: "nunjucks"
    }
}))

// 设置session
app.use(session({
    maxAge: 30000
}, app));

// 首页路由
// ctx：上下文对象
router.get("/", async (ctx) => {
    ctx.cookies.set("username", "xiaoming");
    ctx.body = "cookie";
})








router.get("/test", async (ctx) => {
    let count = ctx.cookies.get("count");
    // 如果有存在cookie，则每次访问，cookie值都加1
    if (count > 0) {
        ++count;
        ctx.cookies.set("count", count, {
            // 设置cookie过期时间
            maxAge: 2000,
        })
    } else {
        // 如果没有cookie值，则说明初次访问，设为1
        count = 1;
        ctx.cookies.set("count", count);
    }
    ctx.body = count;
})

// 设置session页面
router.get("/setSession", async (ctx) => {
    ctx.session.user = "sessionUser";
    ctx.body = "设置session页面";
})

// 获取session页面
router.get("/getSession", async (ctx) => {
    let user = ctx.session.user;
    ctx.body = user;
})

app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})