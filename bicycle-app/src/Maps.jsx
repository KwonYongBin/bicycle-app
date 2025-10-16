import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import axiosData from './util/axiosData';

// const pstList = [
//   { lat: 33.55635, lng: 126.795841, info: "여긴 강남이 아닙니다." },
//   { lat: 33.45635, lng: 126.795841, info: "여긴 커피를 팔지 않습니다" },
//   { lat: 33.35635, lng: 126.795841, info: "메가커피 환영!" }
// ]

const apiUrl = "https://api.citybik.es/v2/networks/";
const stations = ["eoulling-sejong", "tashu", "nubija-changwon", "seoul-bike"];

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
          return data?.network?.stations || [];
        });
        setMaps(mapStations);
      
      } catch (error) {
        console.error("데이터를 불러오는데 실패하였습니다.");
      }

    };
    fetchAllData();
  }, [])
  console.log(maps);

  return (
    <>
    <Map {...props} >
          {maps.map((station) => {
            return <MapMarker key={station.name + station.name} podition={station} onClick={() => {
            console.log(station.name);
          }} ></MapMarker>
            })
          }
            
      {/* {pstList.map((pst) => {
          return <MapMarker key={pst.lat + pst.lng} position={pst} onClick={() => {
            console.log(pst.info);
          }} ></MapMarker>
        })} */}
    </Map>
    <div>
        
      </div>
    </>
  )
}


export default Maps;