const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const static = require("koa-static");
const views = require("koa-views");
const parser = require("koa-parser");
const jsonp = require("koa-jsonp");
const app = new Koa();
app.use(parser());
app.use(static(__dirname + "/public"));
app.use(views(__dirname + "/views", {
    map: {
        html: "nunjucks"
    }
}))

router.get("/data", ctx => {
    ctx.body = "hello world";
})


app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})