const Koa = require("koa"); // 引入Koa构造函数
const views = require("koa-views");
const nunjucks = require("nunjucks");
// post请求
const parser = require("koa-parser");
const router = require("koa-router")();
const app = new Koa(); // 创建应用

// 设置路径，并且告知使用的模板引擎为：nunjucks
app.use(views(__dirname + "/views", {
    map: {
        html: "nunjucks"
    }
}))

app.use(parser());

// index:网页名
// title:传递的参数
router.get("/", async (ctx) => {
    await ctx.render("index", {
        title: "hello nunjucks!"
    });
})

// get方式
router.get("/login", async (ctx) => {
    let username = ctx.query.username;
    let password = ctx.query.password;
    await ctx.render("home", {
        username: username,
        password: password
    })
})

// post方式
router.get("/login", async (ctx) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    await ctx.render("home", {
        username: username,
        password: password
    })
})

app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})