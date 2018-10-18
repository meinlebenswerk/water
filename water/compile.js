const fs = require('fs');

console.log("Loading and compiling water.")
let water_executable = fs.readFileSync("water.js","utf8")
let water_b64 = Buffer.from(water_executable).toString("base64");

fs.writeFileSync("build/water.jse", water_b64)

console.log("Loading and compiling water-loader.")
//TODO -> auto compile loader into README.md :)
let loader_executable = fs.readFileSync("loader.js","utf8")
let loader = "eval(atob(\""+Buffer.from(loader_executable).toString("base64")+"\"))";
fs.writeFileSync("build/loader.js", loader)
