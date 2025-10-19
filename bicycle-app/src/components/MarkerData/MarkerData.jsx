import React from 'react';
import cityBikeImage from '../../util/cityBikeImage';

const MarkerData = ({ data, onClose }) => {
    if (!data) return null;

    const imageKey = ["seoulBike"];
    const imagePath = cityBikeImage[imageKey];

    return (
        <div
            style={{
                position: "relative",
                width: "30%",
                height: "100vh",
                backgroundColor: "#444",
                color: "#fff",
                padding: "16px",
                borderRadius: "10px",
                zIndex: "10000",
                boxSizing: "border-box"
            }}
        >
            <button onClick={onClose} style={{
                padding: "5px",
                color: "#fff",
                position: "absolute",
                right: "-39px ",
                top: "50%",
                transform: "translateY(-50%) rotate(90deg)",
                backgroundColor: "#000",
                borderRadius: "10px"
            }}>Closs</button>
            <h3>{data.name}</h3>
            <img
                src={imagePath}
                alt="자전거 이미지"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
            />
            <p>위도: {data.latitude}</p>
            <p>경도: {data.longitude}</p>
            <p>자전거 수: {data.free_bikes}</p>
            <p>빈 거치대: {data.empty_slots}</p>
        </div>
    );
};

export default MarkerData;

// cityBikeImage.map((bikeImage)=>{
                        
//                     })