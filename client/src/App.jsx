import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

import Join from "./components/Join";
import Chat from "./components/Chat";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path={"/"}
            exact
            element={
              <Join
                name={name}
                setName={setName}
                room={room}
                setRoom={setRoom}
              />
            }
          />
          <Route path={"/chat"} element={<Chat name={name} room={room} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
