/* global window */
import React, {useState, useEffect} from 'react';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import DeckGL from '@deck.gl/react';
import {PolygonLayer} from '@deck.gl/layers';
import ReactMapGL from 'react-map-gl';
import {default as TripsLayer} from './CustomTripsLayer';


// Source data CSV
const DATA_URL = {
  BUILDINGS:
    // 'buildings_just_one.json', // eslint-disable-line
    // 'buildings_VM_7_8.json', // eslint-disable-line
    '/buildings_four_tiles_lyr_2.json',
    // 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line
  // TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line
  TRIPS: '/trips_small_tenth_.json' // eslint-disable-line
  // TRIPS: '/trips_small_tenth.json' // eslint-disable-line
};

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 5.0
});

const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  position: [-73.6154222, 45.486973, 8000]
});

const lightingEffect = new LightingEffect({ambientLight, pointLight});

const material = {
  ambient: 0.1,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [0, 64, 70]
};

const DEFAULT_THEME = {
  buildingColor: [7, 59, 76, 255],
  buildingOpacity: 0.99,
  material,
  effects: [lightingEffect]
};

const INITIAL_VIEW_STATE = {
  // longitude: -74,
  // latitude: 40.72,  
  longitude: -73.5654222,
  latitude: 45.506973, 
  zoom: 11,
  pitch: 45,
  bearing: 0
};


const calcPairDist = function(a) {
  // calculates distance from start of path for every element
  var distArr = [0]
  for(var i=1; i<a.length; i++){
    var dist = Math.sqrt((a[i][0]-a[i-1][0])**2+(a[i][1]-a[i-1][1])**2)
    distArr.push(dist);
  }
  return distArr;
}

const calcStartDist = function(distArr) {
  // calculates distance from start of path for every element
  return distArr.reduce((aa, x, i) => [...aa, x + (aa[i-1] || 0)], []);
}


// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json';
// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';
// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

const landCover = [[[-73.5, 45.4], [-73.6, 45.4], [-73.6, 45.6], [-73.5, 45.6]]];

export default function Map(props,{
  buildings = DATA_URL.BUILDINGS,
  trips = DATA_URL.TRIPS,
  trailLength = 10,
  widthMinPixels = 4,
  initialViewState = INITIAL_VIEW_STATE,
  // mapStyle = MAP_STYLE,
  theme = DEFAULT_THEME,
  loopLength = 4800, // unit corresponds to the timestamp in source data
  animationSpeed = 1.
}) {

  const [time, setTime] = useState(0);
  const [animation] = useState({});
  const [showBldgs, setshowBldgs] = props.buildingsShowProps
  const [showVhls, setshowVhls] = props.vehiclesShowProps
  const [isLoading, setIsLoading] = props.loadingProps

  const agentColors = props.mapColors.traffic.agentColors;

  const animate = () => {
    setTime(t => (t + animationSpeed) % loopLength);
    animation.id = window.requestAnimationFrame(animate);
  };

  var layers=[];
  useEffect(
    () => {
      animation.id = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(animation.id);
    },
    [animation]
  );

  const ShadowSublayer = new PolygonLayer({
    id: 'ground',
    data: landCover,
    getPolygon: f => f,
    stroked: false,
    getFillColor: [0, 0, 0, 0]
  })

  const VehiclesLayer = new TripsLayer({
    id: 'trips',
    data: trips,
    getPath: d => d.path,
    getTimestamps: d => d.timestamps,
    getColor: d => (d.vendor === 0 ? agentColors[0] : (d.vendor === 1 ? agentColors[1] : agentColors[2])),
    opacity: 0.99,
    widthMinPixels,
    rounded: true,
    trailLength,
    currentTime: time,
    shadowEnabled: false,
    // extensions: [new PointTripsLayer()],
  })
  
  function toColor(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16,
        a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
    // return "rgba(" + [r, g, b, a].join(",") + ")";
    return [r+200, g+150, b+100, 222];
  }

  const BuildingsLayer = new PolygonLayer({
    id: 'buildings',
    data: buildings,
    extruded: true,
    wireframe: false,
    opacity: theme.buildingOpacity,
    getPolygon: f => f.polygon,
    getElevation: f => f.height,
    getFillColor: f => toColor(Math.round(f.height)),
    // getFillColor: theme.buildingColor,
    // getFillColor: [222, 0, 0, 55],
    material: theme.material
  })

  
  // async function loadVehicleLayer(){
  //   console.log('1')
  //   setIsLoading(true);
  //   function callback(){
  //     console.log('2')
  //     return VehiclesLayer
  //   }
  //   // var res = await callback();
  //   // console.log('3')
  //   return await callback();
  // }


  var layers = [
    showBldgs && BuildingsLayer,
    showVhls && VehiclesLayer,
  ]

  return (
    <DeckGL
      style={{
          'position': 'fixed',
          'width':'100%',
          'height':'100%',
      }}
      layers={layers}
      effects={theme.effects}
      initialViewState={initialViewState}
      controller={true}
    >

    <ReactMapGL
      mapboxApiAccessToken='pk.eyJ1IjoibWlsYWRueXUiLCJhIjoiY2toNmh1aW93MHIwajJxbzg3OWRuOTVleiJ9.9h4k5GEZOR9O8LS3gtaQow'
      width={400}
      height={400}
      latitude={47.7577}
      longitude={-73.4376}
      zoom={14}
      mapStyle= 'mapbox://styles/miladnyu/ckiazf01c092e19s1k7fjbor4/draft'
      onViewportChange={(viewport) => {
        const {width, height, latitude, longitude, zoom} = viewport;
        // call `setState` and use the state to update the map.
      }}
    />

      {/* <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} /> */}
    </DeckGL>
  );
}

