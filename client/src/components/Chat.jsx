import { useEffect } from "react";
import { io } from "socket.io-client";

let socket;

function Chat({ name, room }) {
  // TODO: remove this
  name = "beshoy";
  room = "logo";

  const endpoint = "localhost:5000";

  useEffect(() => {
    socket = io(endpoint);

    socket.emit("join", { name, room }, (error) => {
      console.log(error);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endpoint, name, room]);

  return <div>chat</div>;
}

export default Chat;
