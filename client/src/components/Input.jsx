import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Input({ sendMessage, message, setMessage }) {
  return (
    <Box component="form" autoComplete="off">
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
  );
}

export default Input;
