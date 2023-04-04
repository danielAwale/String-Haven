import React from "react";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Acoustic from "./pages/Acoustic";
import Electric from "./pages/Electric";
import Bass from "./pages/Bass";
import Ukulele from "./pages/Ukulele";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/acoustic" element={<Acoustic />} />
      </Routes>
      <Routes>
        <Route path="/electric" element={<Electric />} />
      </Routes>
      <Routes>
        <Route path="/bass" element={<Bass />} />
      </Routes>
      <Routes>
        <Route path="/ukulele" element={<Ukulele />} />
      </Routes>
    </Router>
  );
};

export default App;
