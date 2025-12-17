1. 대여 자전거 마커 출력 (React)
```mermaid
    sequenceDiagram
        participant User
        participant Frontend as Frontend (Rental.jsx)
        participant API as JSON (Marker API)
        participant GPS as Geolocation API

        User ->> Frontend: 자전거 대여 페이지 접속 (/rental)

        Frontend ->> API: 비동기 요청 (showMarkerAPI)
        API -->> Frontend: 자전거 전체 데이터 반환
        Frontend ->> Frontend: 상태 저장 (bikeList)

        Frontend ->> GPS: 사용자 위치 요청
        GPS -->> Frontend: 현재 위치 좌표 반환
        Frontend ->> Frontend: 기준 좌표(latLon) 상태 설정

        Frontend ->> Frontend: 거리 계산 및 반경 필터링
        Frontend ->> Frontend: filteredMaps 상태 저장

        Frontend -->> User: 지도에 대여 자전거 마커 출력
```

2. 대여 자전거 정보 출력
```mermaid
    sequenceDiagram
        participant User
        participant Frontend_1 as Frontend_1 (Rental.jsx)
        participant Frontend_2 as Frontend_2 (RentalInfo.jsx)

        User ->> Frontend_1: 마커 클릭
        Frontend_1 ->> Frontend_2: RentalInfo.jsx 호출
        Frontend_2 -->> Frontend_1: Rental.jsx 렌더링
        Frontend_1 -->> User: 브라우저 RentalInfo.jsx 출력
```

<!-- 1. 대여 자전거 마커 출력 (Next.js Migration)
```mermaid
sequenceDiagram
    participant User
    participant Frontend as Frontend (Rental.jsx)
    participant Logic as useRentalLogic
    participant Store as Zustand Store
    participant API as JSON (Marker API)
    participant GPS as Geolocation API

    User ->> Frontend: 자전거 대여 페이지 접속 (/rental)

    Frontend ->> Logic: useRentalLogic 실행

    Logic -->> API: 비동기 요청 (showMarkerAPI)
    API -->> Logic: 자전거 전체 데이터 반환
    Logic ->> Store: bikeList 저장

    Logic -->> GPS: 사용자 위치 요청
    GPS -->> Logic: 현재 위치 좌표 반환
    Logic ->> Store: 기준 좌표(latLon) 저장

    Logic ->> Logic: 거리 계산 및 반경 필터링
    Logic ->> Store: filteredBikeList 저장

    Frontend ->> Store: filteredBikeList 구독
    Frontend ->> User: 지도에 대여 자전거 마커 출력
``` -->