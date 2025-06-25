"use client"
import React, { useEffect, useRef } from 'react';
import Map, { NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Home() {

  const chicagoBounds = [
    [-88.0, 41.6], // Southwest
    [-87.5, 42.1], // Northeast
  ];

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
      initialViewState={{
        longitude: 41.8781,
        latitude: -87.6298,
        zoom: 10,
      }}
      style={{width: '80%', height: 1000}}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      maxBounds={chicagoBounds}
    />
  );
}
