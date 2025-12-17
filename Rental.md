#[List]
1. 대여 자전거 마커 출력
```mermaid
sequenceDiagram
    participant User
    participant Frontend as Frontend (React)
    participant JSON as JSON (JSON_Data)

    User ->> Frontend: 자전거 대여 페이지 접속 (/rental)
    Frontend ->> JSON: 비동기 axios.get(url) (JsonData get)
    JSON ->> Frontend: 비동기 데이터 (showMarkerAPI)변수 할당
    Frontend -->> User: 지도에 대여 자전거 마커 출력
```