import { Box } from "@mui/material";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

function Messages({ messages, name }) {
  return (
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
  );
}

export default Messages;
