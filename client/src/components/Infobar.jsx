import { IconButton, Stack, Typography } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

function Infobar({ room }) {
  const navigate = useNavigate();

  return (
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
  );
}

export default Infobar;
