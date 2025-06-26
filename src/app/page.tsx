"use client"
import React, { useEffect, useRef } from 'react';
import MapComponent from '@/components/map';

export default function Home() {
  return (
    <div className="w-full h-full">
      <MapComponent />
    </div>
  );
}
