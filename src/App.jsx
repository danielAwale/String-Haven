import React from "react";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Acoustic from "./pages/Acoustic";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/acoustic" element={<Acoustic />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
