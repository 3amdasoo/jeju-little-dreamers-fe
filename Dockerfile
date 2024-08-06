# 공식 Node.js 이미지를 베이스 이미지로 사용
FROM node:20.13.1 AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 코드 전체 복사
COPY . .

# React 애플리케이션 빌드
RUN npm run build

# 2단계 - nginx를 사용하여 프로덕션 이미지 생성
FROM nginx:alpine

# 이전 단계에서 빌드된 React 앱 복사
COPY --from=build /app/build /usr/share/nginx/html

# 사용자 정의 nginx 설정 파일이 있는 경우 복사
# COPY nginx.conf /etc/nginx/nginx.conf

# 80번 포트 노출
EXPOSE 3000

# nginx 시작
CMD ["nginx", "-g", "daemon off;"]
