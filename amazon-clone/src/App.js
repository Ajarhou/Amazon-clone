import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1>page note found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
