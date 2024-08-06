import React from 'react';
import { createRoot } from 'react-dom/client';  
import './index.css';
import App from './App';

// 환경 변수에서 API 키를 가져옵니다.
const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

// 카카오 지도 스크립트 추가
const script = document.createElement('script');

script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&libraries=services,clusterer,drawing`;
script.async = true;
document.head.appendChild(script);

const container = document.getElementById('root');
const root = createRoot(container);  
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
