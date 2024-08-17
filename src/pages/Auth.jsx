import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    if (code) {
      console.log('Authorization code:', code);
      // 여기에서 백엔드로 코드를 보내어 토큰을 교환하는 로직을 추가합니다.
      navigate("/main"); // navigate를 호출합니다.
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Auth Page</h1>
      <p>Processing authorization code...</p>
    </div>
  );
};

export default Auth;
