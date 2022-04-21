const Koa = require("koa"); // 引入Koa构造函数
const views = require("koa-views");
const nunjucks = require("nunjucks");
const app = new Koa(); // 创建应用

// 设置路径，并且告知使用的模板引擎为：nunjucks
app.use(views(__dirname + "/views"), {
    map: {
        html: "nunjucks"
    }
})

// index:
app.use(async (ctx) => {
    await ctx.render("index",{title});
})



// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})