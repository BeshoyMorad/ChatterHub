import { Stack, Typography } from "@mui/material";

function Message({ message, name }) {
  const isSentByCurrentUser = message.user === name.trim().toLowerCase();

  return (
    <Stack direction="row" alignItems="center" mb="1rem">
      {isSentByCurrentUser ? (
        <>
          <Typography sx={{ ml: "auto", mr: "0.5rem" }} color="black">
            {message.user}
          </Typography>
          <Typography
            sx={{
              p: "0.6rem",
              borderRadius: "0.5rem",
              bgcolor: "#343486",
            }}
          >
            {message.text}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            sx={{
              p: "0.6rem",
              borderRadius: "0.5rem",
              bgcolor: "#d4d4d4",
              color: "black",
            }}
          >
            {message.text}
          </Typography>
          <Typography sx={{ mr: "auto", ml: "0.5rem" }} color="black">
            {message.user}
          </Typography>
        </>
      )}
    </Stack>
  );
}

export default Message;
