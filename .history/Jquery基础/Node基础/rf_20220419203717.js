const fs = require("fs");

fs.readFile("test.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})

const path = require("path");
