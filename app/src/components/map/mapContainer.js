import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

// Components
import MarkerInfoWindow from './markerInfoWindow';
// Services
import DoctorsService from '../../services/DoctorsService';

// Google maps styles
const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
};

export const MapContainer = ({google, userLocation, locationMarkers}) => {

    const [activeMarker, setActiveMarker] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const handleMarkerClick = async (props, marker) => {
        let placeId = marker.placeId;

        if(placeId !== null) {
            var response = await DoctorsService.getDoctor(placeId);

            if(response.status === 200) {
                let doctorData = response.data;
                setSelectedDoctor(doctorData);
            }
        }

        setActiveMarker(marker);
    }

    const clearSelectedMarker = () => {
        setActiveMarker(null);
        setSelectedDoctor(null);
    }

    // Fix for eventlisteners not working in InfoWindow
    const onInfoWindowOpen = () => {
        const DoctorInfoWindow = (
            <MarkerInfoWindow overlayDetails={selectedDoctor} clearInfoWindow={clearSelectedMarker} />);
        ReactDOM.render(
            React.Children.only(DoctorInfoWindow),
            document.getElementById("InfoWindow"));
    }

    return (
        <div className="w-full h-screen bg-gray-200" data-testid="map-container">
            <Map 
                google={google} 
                zoom={12} 
                containerStyle={containerStyle}
                initialCenter={(userLocation !== null && userLocation !== false) && {
                    lat: userLocation.lat,
                    lng: userLocation.lng
                }}
            >
                {(userLocation !== null && userLocation !== false) && (
                    <Marker
                        position={{
                            lat: userLocation.lat,
                            lng: userLocation.lng
                        }}
                    />
                )}

                {locationMarkers && locationMarkers.map((marker) => {
                    let location = marker.geometry.location;
                    return (
                        <Marker 
                            onClick={handleMarkerClick}
                            key={marker.place_id}
                            position={{
                                lat: location.lat,
                                lng: location.lng
                            }}
                            name={marker.name}
                            placeId={marker.place_id}
                        />
                    );
                })}
                
                <InfoWindow
                    marker={activeMarker}
                    visible={activeMarker != null ? true : false}
                    onOpen={e => {
                        onInfoWindowOpen()
                    }}
                    onClose={clearSelectedMarker}
                    styles={{
                        borderRadius: 0,
                        padding: 0
                    }}>
                        <div id="InfoWindow" />
                </InfoWindow>
                     
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer);