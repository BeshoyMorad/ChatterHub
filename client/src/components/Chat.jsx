import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router";

let socket;

function Chat({ name, room }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const endpoint = "http://localhost:5000";

  useEffect(() => {
    socket = io(endpoint);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        console.log(error);
      }
    });

    return () => {
      socket.emit("userDisconnected");
      socket.off();
    };
  }, [endpoint, name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = () => {
    if (message)
      socket.emit("sendMessage", message, (error) => {
        if (error) {
          console.log(error);
        } else {
          setMessage("");
        }
      });
  };

  return <div></div>;
}

export default Chat;
