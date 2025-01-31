import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

const App = () => {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Home/>
          </>
          
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={
          <>
          <Header />
          <Checkout/>

          </>
          
          } />


        <Route path="*" element={<h1>page note found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
