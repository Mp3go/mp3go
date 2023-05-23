import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
  // Replace 'YOUR_API_KEY' with your actual Google Maps API key
  const apiKey = 'AIzaSyB1FZpRhAWyYeMKVsTf9Aml86Lnkm5GPRc';

  const mapOptions = {
    center: {
      lat: 40.712776,
      lng: -74.005974,
    },
    zoom: 10,
  };

  return (
    <div style={{ height: '80%', width: '280%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
