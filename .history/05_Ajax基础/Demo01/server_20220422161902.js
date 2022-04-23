const Koa = require("koa");
const router = require("koa-router")();
const parser = require("koa-parser");
const app = new Koa();
app.use(parser());

let dataList = ["香蕉", "苹果", "鸭梨"];

// 查询
router.get("/fruits", ctx => {
    ctx.body = dataList;
})

// post添加
router.post("/fruits", ctx => {
    let fruit = ctx.request.body.fruit
})

app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})