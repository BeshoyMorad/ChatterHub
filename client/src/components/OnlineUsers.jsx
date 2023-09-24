import { Box, Divider, Typography } from "@mui/material";

function OnlineUsers({ users }) {
  return (
    <Box
      sx={{
        height: "fit-content",
        p: "1rem",
        bgcolor: "#2d2d51",
        borderRadius: "1rem",
        ml: "1.5rem",
      }}
    >
      <Typography variant="h4">Online Users</Typography>
      <Divider />
      {users.map(({ name }) => (
        <Typography key={name} p="1rem" variant="h6">
          {name}
        </Typography>
      ))}
    </Box>
  );
}

export default OnlineUsers;
