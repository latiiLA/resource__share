// imported libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
