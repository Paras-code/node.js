const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`other data recieved`);
});

customEmitter.emit("response", 'Paras', 18);

