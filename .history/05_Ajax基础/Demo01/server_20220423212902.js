const Koa = require("koa");
const router = require("koa-router")();
const static = require("koa-static");
const views = require("koa-views");
const parser = require("koa-parser");
const app = new Koa();
app.use(parser());
app.use(static(__dirname + "/public"));
app.use(views)

let dataList = ["香蕉", "苹果", "鸭梨"];

// get查询
router.get("/fruits", ctx => {
    ctx.body = dataList;
})

// post添加
router.post("/fruits", ctx => {
    // form-data中输入草莓
    let fruit = ctx.request.body.fruit;
    dataList.push(fruit);
    ctx.body = dataList;
})

// put修改
router.put("/fruits/:id", ctx => {
    let id = ctx.params.id;
    // form-data中输入草莓
    let fruit = ctx.request.body.fruit;
    // 要删除元素的索引,删除几个元素,将删除的元素替换为XX
    dataList.splice(id, 1, fruit);
    ctx.body = dataList;
})

// delete删除
router.delete("/fruits/:id", ctx => {
    let id = ctx.params.id;
    dataList.splice(id, 1);
    ctx.body = dataList;
})

app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})