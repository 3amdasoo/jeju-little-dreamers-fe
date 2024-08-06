import React, { useEffect } from "react";
import styles from "../styles/mainpage.module.css";

export default function Map() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = ``;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.499621, 126.531188), // 제주 시청 좌표
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const places = new window.kakao.maps.services.Places();

        // 제주 시청 근처의 장소 검색
        places.keywordSearch("제주 시청", (data, status, pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const bounds = new window.kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }

            map.setBounds(bounds);
          }
        });

        function displayMarker(place) {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
            });
            infowindow.open(map, marker);
          });
        }
      }
    };
  }, []);

  return <div id="map" className={styles.map}></div>;
}
