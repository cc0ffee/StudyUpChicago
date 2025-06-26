"use client"
import React, { useEffect, useRef } from 'react';
import MapComponent from '@/components/map';

export default function Home() {
  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const response = await fetch('/api/locations/get');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching people:', error);
    }
  };

  return (
    <div className="w-full h-full">
      <MapComponent />
    </div>
  );
}
