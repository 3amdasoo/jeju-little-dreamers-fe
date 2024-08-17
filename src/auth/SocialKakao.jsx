import React from "react";
import kakaologin from "../assets/kakao_login.png";

function SocialKakao() {
  const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const redirect_uri = 'http://localhost:3000/kakao/callback'; // Redirect URI

  // OAuth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button className="kakao-login" onClick={handleLogin}>
      <img
        src={kakaologin}
        alt="카카오 로그인"
        className="kakao-login-image"
      />
    </button>
  );
}

export default SocialKakao;
