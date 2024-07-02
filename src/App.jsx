import { useState } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const pageSize = 12;
  const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
  return (
    <>
      <Router>
        <Navbar />
        <AppRouter apiKey={apiKey} pageSize={pageSize} />
      </Router>
    </>
  );
}

export default App;
