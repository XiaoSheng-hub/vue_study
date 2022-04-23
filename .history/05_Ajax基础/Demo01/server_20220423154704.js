const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require
const parser = require("koa-parser");
const app = new Koa();
app.use(parser());


app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})