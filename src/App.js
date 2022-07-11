import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ExerciceDetail from "./Pages/ExerciceDetail";
import Footer from "./Components/Footer";
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1448px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciceDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
