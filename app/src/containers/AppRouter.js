import React from 'react';
import { Router, Location } from '@reach/router';

// Constants
import { ROUTES } from '../constants';
// Screens
import FindADoctor from '../screens/FindADoctor';

const AppRouter = () => {
    return (
        <Location>
            { ({ location }) => {
                return (
                    <Router location={location}>
                        <FindADoctor path={ROUTES.FIND_DOCTOR} default />
                    </Router>
                );
            }}
        </Location>
    )
}

export default AppRouter;