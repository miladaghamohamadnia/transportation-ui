import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import "./BaseMap.scss";

const BaseMap = () => {
  mapboxgl.accessToken = '';

  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;