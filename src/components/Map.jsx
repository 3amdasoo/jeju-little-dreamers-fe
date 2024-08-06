import React, { useEffect, useState } from "react";
import styles from "../styles/mainpage.module.css";

export default function Map({ filteredData, onMarkerClick }) {
  const [position, setPosition] = useState({
    center: {
      lat: 33.487131,
      lng: 126.5316927,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    // 위치 정보를 가져오는 부분 주석화
    /*
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
          console.log(position);
        },
        (err) => {
          setPosition((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setPosition((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
    */
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=6022b3ea363825dba0253bc58c3f328c&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            position.center.lat,
            position.center.lng
          ),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          position.center.lat,
          position.center.lng
        );

        const icon = new window.kakao.maps.MarkerImage(
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
          new window.kakao.maps.Size(30, 35),
          {
            offset: new window.kakao.maps.Point(16, 34),
            alt: "현재 위치 마커",
            shape: "poly",
            coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33",
          }
        );

        const myPositionMarker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: icon,
        });

        myPositionMarker.setMap(map);

        filteredData.forEach((item) => {
          const storeMarker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(item.lat, item.lng),
          });
          storeMarker.setMap(map);

          window.kakao.maps.event.addListener(storeMarker, "click", () => {
            onMarkerClick(item);
          });
        });
      }
    };
  }, [position, filteredData, onMarkerClick]);

  return <div id="map" className={styles.map}></div>;
}
