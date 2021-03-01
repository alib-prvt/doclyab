import React, { memo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Router } from '@reach/router';

// Services
import DoctorsService from '../services/DoctorsService';
// Constants
import { CONTENT, ROUTES } from '../constants';
// Screens
import BookAppointment from './BookAppointment';
// Components
import MapContainer from '../components/map/mapContainer';

const FindADoctor = () => {

    const [ userLocation, setUserLocation ] = useState(null);
    const [ doctorsData, setDoctorsData ] = useState(false);

    const storeUsersLocation = (location) => {
        var coords = location.coords;

        var userLocationData = { lat: coords.latitude, lng: coords.longitude };

        sessionStorage.setItem('userLocation', JSON.stringify(userLocationData));
        setUserLocation(userLocationData);
    }

    useEffect(() => {
        // Fetch location

        if(navigator.geolocation) {

            // Ensure location isn't already stored
            var sessionData = sessionStorage.getItem('userLocation');

            if(sessionData === null) {
                navigator.geolocation.getCurrentPosition(storeUsersLocation);
            } else {
                setUserLocation(JSON.parse(sessionData));
            }
        } else {
            // Handle permissions error
            // setUserLocation(false);
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            var response = await DoctorsService.getDoctorsNearUser();

            if(response.status === 200) {
                let doctorsData = response.data;
                setDoctorsData(doctorsData);
            }
        }
        if(userLocation !== null) {
            fetchData();
        }
    }, [userLocation]);

    return (
        <>
            <Helmet>{CONTENT.PAGES.FIND_DOCTOR.META_TITLE}</Helmet>
            {userLocation !== null ?
                <MapContainer
                    userLocation={userLocation}
                    fetchedUserLocation={userLocation !== null}
                    locationMarkers={doctorsData} />
            :
                <div data-testid="map-loading">
                    <p>Waiting on location of user.</p>
                </div>
            }

            <Router>
                <BookAppointment path={`${ROUTES.BOOK_APPOINTMENT}/:placesId`} />
            </Router>
        </>
    );
}

export default memo(FindADoctor);