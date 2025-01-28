import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Accept from "./pages/Accept";
import Decline from "./pages/Decline";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Website" element={<Homepage />} />
        <Route path="/accept" element={<Accept />} />
        <Route path="/decline" element={<Decline />} />
      </Routes>
    </Router>
  );
}

export default App;
