const Koa = require("koa"); // 引入Koa构造函数
const router = require("koa-router")();
const views = require("koa-views");
const nunjucks = require("nunjucks");
const app = new Koa(); // 创建应用

// 设置路径，并且告知使用的模板引擎为：nunjucks
app.use(views(__dirname + "/views", {
    map: {
        html: "nunjucks"
    }
}))

// 首页路由
// ctx：上下文对象
router.get("/", async (ctx) => {
    ctx.cookies.set("username", "xiaoming");
    ctx.body = "cookie";
})

router.get("/test", async (ctx) => {
    let count = ctx.cookies.get("count");
    if(count>0){
        count++;
        ctx.cookies.set("count",cou)
    }
})

app.use(router.routes());

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})