const fs = require("fs");

const rawData = fs.readFileSync("./data.json");
const jobs = JSON.parse(rawData);
console.log(jobs);
