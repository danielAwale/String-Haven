import React from "react";
import { Home, SelectItem } from "./pages";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<SelectItem />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
