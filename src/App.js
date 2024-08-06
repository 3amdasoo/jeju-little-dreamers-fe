import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Restaurant from "./pages/Restaurant";
import Header from "./components/Header";
import WriteReview from "./pages/WriteReview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/main"} element={<Main />}></Route>
          <Route path={"/restaurant"} element={<Restaurant/>}></Route>
          <Route path={"/write"} element={<WriteReview/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
