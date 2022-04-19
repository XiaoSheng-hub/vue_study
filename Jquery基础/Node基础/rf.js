const path = require("path");

let domain = "https://www.baidu.com"
let url = "docs";
let id = "888";

let result = path.join(domain, url, id);
console.log(result);