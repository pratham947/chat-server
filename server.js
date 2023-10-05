const { Server } = require("socket.io");

const io = new Server(3001, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // ...
  socket.on("user-name", (name) => {
    console.log(name);
  });

  socket.on("my-message", (message) => {
    socket.broadcast.emit("client-message", message);
  });
});
