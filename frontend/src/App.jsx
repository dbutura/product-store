import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.50", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
