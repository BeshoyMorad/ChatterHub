import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import router from "./router.js";

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(router);
app.use(cors());

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("join", ({ name, room }, callback) => {
    let error = false;

    if (error) {
      callback({ error: "error" });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
