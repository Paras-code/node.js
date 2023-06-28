const { readFile } = require("fs");

console.log("started first tast");
readFile("./content/test1.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting new task");
