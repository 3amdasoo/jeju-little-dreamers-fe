import React, { useEffect, useState } from "react";
import styles from "../styles/mainpage.module.css";

export default function Map({ props }) {
  const [selected, setSelected] = useState([]);
  const [filteredDummy, setFilteredDummy] = useState([]);

  useEffect(() => {
    setSelected(props);
    console.log(selected);

    // 식당 카테고리 필터링
    for (let i = 0; i > props.length; i++) {
      // setFilteredDummy(dummy.filter((el) => el.category.includes(selected[i])));
      console.log(props[i]);
    }
    // console.log(filteredDummy);
  }, [props]);

  const [position, setPosition] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setPosition((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );

      console.log(position);
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setPosition((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  // 지도 그리기
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

        // console.log(position.center.lat);

        // 마커가 표시될 위치입니다
        var markerPosition = new window.kakao.maps.LatLng(
          position.center.lat,
          position.center.lng
        );

        // 나의 현재 위치 마커 설정
        const icon =
          // 이미지 주소
          new window.kakao.maps.MarkerImage(
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
            // 이미지 크기
            new window.kakao.maps.Size(30, 35),
            // 이미지 옵션
            {
              offset: new window.kakao.maps.Point(16, 34),
              alt: "현재 위치 마커",
              shape: "poly",
              coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33",
            }
          );

        // 현재 내 위치 마커를 생성합니다
        var myPositionMarker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: icon,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        myPositionMarker.setMap(map);

        // 식당들의 마커를 생성합니다
        for (let i = 0; i < filteredDummy.length; i++) {
          const storeMarker = new window.kakao.maps.Marker({
            // position: new window.kakao.maps.LatLng(dummy[i].lat, dummy[i].lng),
          });
          storeMarker.setMap(map);
        }
      }
    };
  }, [position]);

  return <div id="map" className={styles.map}></div>;
}
