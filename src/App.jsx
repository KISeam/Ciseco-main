import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import MouseTracker from "./components/MouseTracker";

function App() {
  return (
    <>
      <div>
        <MouseTracker />
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
