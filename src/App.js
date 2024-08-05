import React from 'react';
import './App.css';
import logo from './image.png';
import kakaologin from './kakao_login_medium_wide.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>제주 꼬망이들</h1>
        <button className="kakao-login">
          <img src={kakaologin} alt="카카오 로그인" className="kakao-login-image" />
        </button>
      </header>
    </div>
  );
}

export default App;
