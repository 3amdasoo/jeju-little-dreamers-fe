import logo from "../assets/logo.png";
import kakaologin from "../assets/kakao_login.png";

function SocialKakao() {
  const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;// REST API KEY
  const redirect_uri = 'http://localhost:3000/auth'; // Redirect URI
  console.log(kakaoApiKey)
  // OAuth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const testLogin = () => {
    window.location.href = "http://localhost:3000/main";
  };

  return (
    <button className="kakao-login" onClick={testLogin}>
          <img
            src={kakaologin}
            alt="카카오 로그인"
            className="kakao-login-image"
          />
        </button>
  );
}

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>제주 꼬망이들</h1>
        <SocialKakao></SocialKakao>
      </header>
    </div>
  );
}
