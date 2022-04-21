const Koa = require("koa"); // 引入Koa构造函数
const app = new Koa(); // 创建应用

// 引入中间件，中间件就是一个函数
// 中间件在请求和响应之间调用
// 是async函数
// ctx存储了请求的相关信息，也可以设置响应的相关信息。
app.use(async(ctx) => {

});

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})