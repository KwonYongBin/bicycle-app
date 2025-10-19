import React from 'react'
import Maps from '../data/Maps'

const MapData = () => {
  return (
    <Maps
      id='map'
        center={{lat: 37.575877, lng: 126.976897}}
        style={{width:"100%", height: "100vh"}}
        level={4} 
    />
  )
}

export default MapData;