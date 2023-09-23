import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Join({ name, setName, room, setRoom }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        p: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h2" mb="0.5rem" textAlign="center">
          Join
        </Typography>

        <Divider
          sx={{
            mb: "1rem",
          }}
        />

        <Box component="form" autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            sx={{ mb: "1rem" }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Room"
            variant="outlined"
            sx={{ mb: "1rem" }}
            onChange={(e) => setRoom(e.target.value)}
          />

          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to="/chat"
          >
            <Button variant="contained" fullWidth type="submit">
              Sign In
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Join;
