const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require("koa-nunjucks");
const views = require("koa-views");
const parser = require("koa-parser");
const app = new Koa();

app.use()
app.use(parser());


app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})