const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const static = require("koa-static");
const views = require("koa-views");
const parser = require("koa-parser");
const app = new Koa();
app.use(parser());
app.use(static(__dirname + "/public"));
app.use(views(__dirname + "/views", {
    map: {
        html: "nunjucks"
    }
}))

router.get("/data", ctx => {
    // 允许8080
    ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:8080")
    ctx.body = "hello world";
})


app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})