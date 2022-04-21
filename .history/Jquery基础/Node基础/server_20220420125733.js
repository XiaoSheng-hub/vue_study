const Koa = require("koa"); // 引入Koa构造函数
const app = new Koa(); // 创建应用

// 引入中间件，中间件就是一个函数
// 中间件在请求和响应之间调用
// 是async函数
app.use(async() => {

});

// 设置监听端口
app.listen(3000, () => {
    console.log("server is running");
})