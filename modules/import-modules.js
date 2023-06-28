//   modules in node
// Every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const name = require("./4-names");
const sayHi = require("./1-modules");
const data = require("./5-alternative");
require("./6-mode");

sayHi("susan");
sayHi(name.john);
sayHi(name.peter);
