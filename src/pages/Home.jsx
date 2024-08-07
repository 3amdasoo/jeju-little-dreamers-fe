import React from "react";
import logo from "../assets/logo.png";
import kakaologin from "../assets/kakao_login.png";

function SocialKakao() {
  const kakaoApiKey = "6022b3ea363825dba0253bc58c3f328c"; // REST API KEY
  const redirect_uri = 'http://43.201.57.159:3000//auth'; // Redirect URI
  // OAuth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button className="kakao-login" onClick={handleLogin}>
      <img src={kakaologin} alt="카카오 로그인" className="kakao-login-image" />
    </button>
  );
}

function Home() {
  return (
    <div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>제주 꼬망이들</h1> */}
        <SocialKakao />
      </header>
    </div>
  );
}

export default Home;
