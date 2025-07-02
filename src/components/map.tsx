"use client"
import { useEffect, useRef, useState } from 'react';
import Map, { MapRef, NavigationControl, Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

type Location = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    description: string;
    address: string;
}

export default function MapComponent() {
    const [locations, setLocations] = useState<Location[]>([]);

    const mapContainer = useRef(null);
    const mapRef = useRef<MapRef>(null);
    const chicagoBounds = [
        [-88.0, 41.6], // Southwest
        [-87.5, 42.1] // Northeast
      ];

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const res = await fetch('/api/locations/get');
                const data = await res.json();
                setLocations(data);
            } catch (err) {
                console.error("Error fetching locations:", err);
            }
        };
        fetchLocations();
    }, []);
    
    return (
        <div ref={mapContainer} className=''>
            <Map
                ref={mapRef}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
                initialViewState={{
                    longitude: -87.6298,
                    latitude: 41.8781,
                    zoom: 14,
                }}
                reuseMaps
                style={{width: '100%', height: '100vh'}}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                // @ts-ignore, the bounds type is valid and compiles fine
                maxBounds={chicagoBounds}
                dragRotate={false}
            >
                {locations.map((l) => (
                    <Marker key={l.id} latitude={l.latitude} longitude={l.longitude} anchor="bottom"><img width={20} height={20} src='./coffee.svg'/></Marker>
                ))}
                <NavigationControl showCompass={false}/>
            </Map>
        </div>
    )
}