import React, { useEffect } from 'react'

const Map = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=ba6d5501eeb4a5d8098250cf5972fc00&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 5,
                }
                new window.kakao.maps.Map(container, options);
            });
        };
    }, []);

    return (
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
    )
}

export default Map;