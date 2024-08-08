# 카카오 부트캠프 2박 3일 해커톤

## 제주 꼬밍이들 (FE Repo)
### 제주 아동급식카드 가맹점 조회 서비스 

#### 프로젝트 기간: 2024.08.05 ~ 2024.08.07 (2박 3일 동안 진행)

### 기술 스택
- **FE**: 리액트, 자바스크립트, CSS
- **BE**: Spring Boot, JPA
- **DB**: AWS RDS MySQL
- **API**: 활용 데이터: [제주특별자치도_아동급식카드가맹점현황](https://www.data.go.kr/data/15100076/fileData.do)

### 팀 소개 
- **팀명**: 삼다수 
- **팀장**: jun.park(박원준) 
- **팀원**: aspyn.park(박소연), lucy.jeon(전은주), sean.kim(김준호), kevin.lee(이강윤)

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/orgs/3amdasoo/people/Recyclingbottle"><img src="width="100px;" alt=""/><br /><sub><b>FE 팀장: jun.park(박원준)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/orgs/3amdasoo/people/lucy726j"><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원: lucy.jeon(전은주)</b></sub></a><br /></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/orgs/3amdasoo/people/bysoyeon"><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원: aspyn.park(박소연)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/orgs/3amdasoo/people/lky3004me"><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원: kevin.lee(이승윤)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/orgs/3amdasoo/people/grulla79"><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원: sean.kim(김준호)</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

### 역할 분담
- **jun.park(박원준)**: 팀장, 발표, FE, AWS 배포
- **lucy.jeon(전은주)**: FE, CSS 
- **aspyn.park(박소연)**: BE, DB 
- **kevin.lee(이승윤)**: BE, Python 크롤링(네이버 메뉴 정보 조회), DB 
- **sean.kim(김준호)**: BE, AWS 배포 

## 프로젝트 설명

### 프로젝트 개요 
아동급식카드를 사용하는 아이들이 가맹점 정보를 쉽게 조회하여 복지혜택을 원활히 누릴 수 있도록 하는 서비스입니다.

### 프로젝트 필요성
1. **누가 사용하면 좋을까?**
   - **청소년, 아동**: 아동급식카드를 소유하고 사용해야 하는 청소년과 아동
   - **지자체 담당자**: 아동급식카드 가맹점 현황을 빠르게 피드백 받아야 하는 담당자
   - **보호자**: 아동급식카드 지원을 받아 육아를 하는 청소년 혹은 아동 보호자
   - **착한 식당 혼내주기**: 좋은 식당 돈으로 혼쭐내주는 사람들

2. **아동급식 카드 가맹점의 실태**
   - 제주시 부적합 아동급식카드 가맹점 다수 적발
   - 유흥주점 혹은 술집 등이 가맹점인 경우
   - 고물가로 인한 메뉴, 편의점 한정 이용 한계점
   - 가맹점이지만 아동급식카드 사용을 거부하는 경우 존재

3. **기존 서비스 분석**
   - 기존 서비스가 존재하지만 불편한 UI
   - 모바일 친화 어플리케이션의 부족함
   - 기존 지도 어플리케이션에서 가맹점 조회 불가
   - 기존 서비스 중인 어플리케이션이 제주도 및 일부 지역을 지원하지 않음

4. **서비스 목표**
   - **쉬운 접근성**: 원하는 지역의 가맹점을 지도에서 쉽고 빠르게 조회
   - **메뉴와 가격 미리보기**: 기존 서비스는 상호명 정보만 있어 메뉴 정보는 추가 검색 필요
   - **부적합한 가맹점 필터링**: 술집 등 부적합한 가맹점 미리 필터링
   - **카테고리 & 가격대 설정**: 원하는 메뉴를 지원 금액 한도를 고려하여 찾을 수 있는 기능

5. **최종 목표**
   "제주도의 아동급식 카드 이용 아동 청소년이 눈치 보지 않고 가맹점을 찾아 힘을 얻을 수 있도록 하는 서비스."

6. **서비스 기능**
   - **현재 위치 기준 지도로 가맹점 표시**: 현재 위치나 지도를 조정하여 주변 가맹점을 표시
   - **해당 가맹점 정보 제공**: 어떤 메뉴, 어떤 가격인지를 제공
   - **가맹점 리뷰 기능 제공**: 아동급식카드 사용에 대한 리뷰를 작성할 수 있음

7. **서비스 시스템 아키텍쳐**
   ![image](https://github.com/user-attachments/assets/3b7b55ae-ef5d-4318-9d6c-2154a614189b)

8. **서비스 링크**
   준비중입니다. 

9. **기대 효과**
   - 정부지원이 필요한 아동들이 쉽고 편하게 아동 급식 지원 카드를 가맹점에서 이용 가능
   - 아동급식카드의 사용 편의성과 접근성을 높여 정책의 효과성을 극대화
   - 리뷰를 통해 아동급식카드 사용에 소극적인 가맹점을 파악하고 개선
   - 부적절한 가맹점을 필터링하여 신뢰할 수 있는 정보만 제공함으로써 아동과 청소년의 안전한 식사를 보장

10. **향후 계획**
   - **사회 정책 서비스**: 아동급식카드를 사용하는 아이들이 받을 수 있는 사회 정책 안내
   - **가맹점 데이터 추가**: 가맹점 데이터를 주기적으로 업데이트하여 데이터의 활용 가능성 최대화
   - **검색 및 필터 기능 보완**: 보다 상세한 필터를 제공하여 카테고리별 분류 정확도 높임
   - **지역 확대**: 제주 지역에 한정하는 것이 아닌 전국의 데이터를 서비스에서 제공

### 발표 자료 링크
[발표 자료 링크](https://www.canva.com/design/DAGNDa1-m9U/M8CdlGe54FRHH5cu7OJjLQ/view?utm_content=DAGNDa1-m9U&utm_campaign=designshare&utm_medium=link&utm_source=editor)
