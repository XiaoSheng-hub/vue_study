const Koa = require("koa");
const router = require("koa-router");
const parser = require("koa-parser");
const app = new Koa();
app.use(parser());

let dataList = ["香蕉", "苹果", "鸭梨"];

router.get("/fruits", ctx => {
    
})