import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Restaurant from "./pages/Restaurant";
import Header from "./components/Header";
import WriteReview from "./pages/WriteReview";
import Auth from "./pages/Auth";
import bgImgUrl from "./assets/kids.png";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${bgImgUrl})`, backgroundRepeat: "cover" }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/main" element={<Main />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/write/:id" element={<WriteReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
