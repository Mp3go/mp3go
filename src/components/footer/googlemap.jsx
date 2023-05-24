import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
  const apiKey = 'AIzaSyB1FZpRhAWyYeMKVsTf9Aml86Lnkm5GPRc';

  const mapOptions = {
    center: {
      lat: 40.712776,
      lng: -74.005974,
    },
    zoom: 10,
  };

  const [mapContainerStyle, setMapContainerStyle] = React.useState({
    height: '400px', // Initial height for larger screens
    width: '100%', // Take full width of the parent container
  });

  // Update the map container height dynamically based on available space
  const handleResize = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    setMapContainerStyle(prevStyle => ({
      ...prevStyle,
      height: `${windowHeight * 0.6}px`, // Adjust the percentage to your preference
    }));
  };

  // Attach the resize event listener
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={mapContainerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
