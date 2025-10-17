import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import axiosData from './util/axiosData';

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