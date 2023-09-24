import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";

import Infobar from "../components/Infobar";
import Messages from "../components/Messages";
import Input from "../components/Input";
import OnlineUsers from "../components/OnlineUsers";

let socket;

function Chat({ name, room }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const endpoint = "http://localhost:5000";

  useEffect(() => {
    socket = io(endpoint);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        console.log(error);
        navigate("/");
      }
    });

    return () => {
      socket.off();
    };
  }, [endpoint, name, room, navigate]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

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

  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        p: "1.5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{ width: { xs: "100%", md: "70%" }, height: "80%" }}
      >
        <Infobar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <OnlineUsers users={users} />
      </Grid>
    </Grid>
  );
}

export default Chat;
