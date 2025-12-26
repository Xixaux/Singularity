'use client';

import React, { useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import SingularityLoading from '@singularity/core/SingularityLoading';

/**
 * The GoogleMapsAPIWidget with a bare, modern, Lyft/Uber-style map centered on Los Angeles.
 */
function GoogleMapsAPIWidget() {
  const theme = useTheme();
  const [error, setError] = useState<string | null>(null);

  // Load Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDD9RwGjJpKBs5eCGNR8ZNDUP2gtLXWXQw',
    libraries: ['maps'],
  });

  // Map container style
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  // Map center (Los Angeles) and zoom
  const center = {
    lat: 34.0522,
    lng: -118.2437,
  };

  const mapStyles = [
    { elementType: 'geometry', stylers: [{ color: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f5f5f5' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: theme.palette.mode === 'dark' ? '#b0b0b0' : '#333333' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff' }, { weight: 2 }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: theme.palette.mode === 'dark' ? '#333333' : '#ffffff' }, { lightness: -10 }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: theme.palette.mode === 'dark' ? '#1565c0' : '#4a90e2' }] },
    { featureType: 'poi', stylers: [{ visibility: 'simplified' }] },
    { featureType: 'transit', stylers: [{ visibility: 'simplified' }] },
  ];

  
  const markerSvg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${theme.palette.primary.main}"/>
    </svg>
  `;

  if (loadError) {
    return <div style={{ color: 'red' }}>Failed to load Google Maps</div>;
  }

  if (!isLoaded) {
    return <SingularityLoading />;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      options={{
        styles: mapStyles,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
      }}
    >
      <MarkerF
        position={center}
        title="Los Angeles"
        icon={{
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(markerSvg),
          scaledSize: new window.google.maps.Size(24, 24),
        }}
      />
    </GoogleMap>
  );
}

export default memo(GoogleMapsAPIWidget);