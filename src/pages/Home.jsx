import logo from "../assets/logo.png";
import kakaologin from "../assets/kakao_login.png";

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>제주 꼬망이들</h1>
        <button className="kakao-login">
          <img
            src={kakaologin}
            alt="카카오 로그인"
            className="kakao-login-image"
          />
        </button>
      </header>
    </div>
  );
}
