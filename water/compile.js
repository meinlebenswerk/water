const fs = require('fs');

let water_executable = fs.readFileSync("water.js","utf8")
console.log(water_executable)

let water_b64 = Buffer.from(water_executable).toString("base64");

console.log(water_b64)

let loader_executable = fs.readFileSync("loader.js","utf8")
console.log(loader_executable)
let loader = "eval(atob(\""+Buffer.from(loader_executable).toString("base64")+"\"))";

console.log(loader)
