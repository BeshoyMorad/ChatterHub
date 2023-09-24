import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

let socket;

function Chat({ name, room }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
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

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        p: "1.5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ width: { xs: "100%", md: "70%" }, height: "80%" }}>
        {/* Info Bar */}
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            p: "0.5rem",
            borderRadius: "5px 5px 0 0",
            bgcolor: "#343486",
          }}
        >
          <TollIcon />
          <Typography width="100%" ml="0.5rem" variant="h6">
            {room}
          </Typography>

          <IconButton
            onClick={() => {
              navigate("/");
              navigate(0);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        {/* Messages */}
        <Box
          sx={{
            bgcolor: "#acacb9",
            height: "100%",
            p: "1.2rem",
            "& > .react-scroll-to-bottom--css-chadj-79elbk": {
              height: "100%",
            },
          }}
        >
          <ScrollToBottom>
            {messages.map((message, index) => (
              <Message key={index} message={message} name={name} />
            ))}
          </ScrollToBottom>
        </Box>

        {/* Input */}
        <Box component="form">
          <TextField
            variant="filled"
            sx={{
              bgcolor: "rgb(52 52 134 / 42%)",
            }}
            label="Type a message..."
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={sendMessage}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.children[1].children[0].blur();
                sendMessage();
              }
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default Chat;
