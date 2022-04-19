const fs = require("fs");

fs.readFile("test.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})

const path = require("path");

let domain = "https://www.baidu.com"
let url = "docs";
let id = "888";

path.join(domain,url,id)