# Node.js LTS 버전을 기반 이미지로 사용합니다.
FROM node:lts

# 작업 디렉토리를 설정합니다.
WORKDIR /app

# package.json과 package-lock.json을 복사합니다.
COPY package*.json ./

# 의존성을 설치합니다.
RUN npm install

# React 앱 소스 파일들을 복사합니다.
COPY . .

# React 앱을 빌드합니다.
RUN npm run build

# 빌드된 앱을 서빙하기 위해 serve 패키지를 설치합니다.
RUN npm install -g serve

# 컨테이너가 실행될 때 앱을 서빙합니다.
CMD ["serve", "-s", "build"]

# 컨테이너가 사용할 포트를 설정합니다.
EXPOSE 3000
