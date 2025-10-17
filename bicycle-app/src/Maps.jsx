import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import axiosData from './util/axiosData';

const apiUrl = "https://api.citybik.es/v2/networks/";
const stations = ["seoul-bike", "eoulling-sejong", "tashu", "nubija-changwon"];

const Maps = (props) => {

  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const dataPromises = stations.map((stationName) => {
        const url = `${apiUrl}${stationName}`;
        return axiosData(url);
      });

      try {
        const allData = await Promise.all(dataPromises);

        const mapStations = allData.flatMap(data => {
          return data.network.stations;
        });
        setMaps(mapStations);
      
      } catch (error) {
        console.error("데이터를 불러오는데 실패하였습니다.");
      }

    };
    fetchAllData();
  }, [])
  console.log(maps);

  function handleMarkerClickEvent(station){
    alert(station.name);
  }

  return (
    <Map {...props} >
          {maps.map((station) => {
            console.log(station)
              return <MapMarker 
                  key={`${station.id}-${station.latitude}-${station.longitude}`}
                  position={{lat:station.latitude,lng:station.longitude}}
                  onClick={()=>{handleMarkerClickEvent(station)}}
                >
                </MapMarker>
            })
          }
    </Map>
  )
}


export default Maps;

// "stations": [
//       {
//         "name": "1426. 면목도시개발아파트 1동 앞", 현재 공유 바이크 스테이션의 주소
//         "latitude": 37.57358932, // 스테이션의 위도 값
//         "longitude": 127.08682251, // 스테이션의 경도 값
//         "timestamp": "2025-10-17T08:51:36.508211+00:00Z", 보류 //최근 반영된 스테이션의 상황 시간
//         "empty_slots": 0, //현재 자전거를 반남할 수 있는 슬롯
//         "extra": {
//           "kid_bikes": 2, // 스테이션에 어린이를 탑승할 수 있는 자전거의 대수
//           "slots": 10, // 스테이션의 남은 자리
//         }