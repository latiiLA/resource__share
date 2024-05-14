// imported libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/signup" element={<SignUp />} />
          <Route  path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
