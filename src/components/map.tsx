"use client"
import { useEffect, useRef } from 'react';
import Map, { NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapComponent() {
    const chicagoBounds = [
        [-88.0, 41.6], // Southwest
        [-87.5, 42.1] // Northeast
      ];
    
    return (
        <div>
            <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
            initialViewState={{
                longitude: -87.6298,
                latitude: 41.8781,
                zoom: 14,
            }}
            style={{width: '100%', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            // @ts-ignore, the bounds type is valid and compiles fine
            maxBounds={chicagoBounds}
            />
        </div>
    )
}