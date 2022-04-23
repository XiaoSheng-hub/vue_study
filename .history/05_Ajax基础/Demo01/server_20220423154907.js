const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require("koa-nunjucks");
const views = require("koa-views");
const parser = require("koa-parser");
const app = new Koa();

app.use(views(__dirname + "/views", {
    map: {
        html: "numjucks"
    }
}))

app.use(parser());

router.get("/", async ctx => {
    await ctx.render("index");
})

router.get("/data")


app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})