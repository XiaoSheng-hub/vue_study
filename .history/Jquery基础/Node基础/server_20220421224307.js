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

// post请求
router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if (username === "xiaoming" && password === "123456") {
        ctx.session.user = "xiaoming"
        // 重定向
        ctx.redirect("/list");
    } else {
        ctx.redirect("/");
    }
})

// 内容页
router.get("/list", async (ctx) => {
    // session里面有user,就渲染list页面
    if (ctx.session.user) {
        await ctx.render("list.html");
    } else {
        ctx.redirect("/");
    }
})

// 注销
router.get("/logout", async ctx =>{
    // 清除session中的user值
    ctx.session.user = "";
    
    ctx.redirect("/");
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