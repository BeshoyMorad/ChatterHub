import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} exact element={<Join />} />
        <Route path={"/chat"} element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
