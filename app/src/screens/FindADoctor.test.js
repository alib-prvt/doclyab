import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FindADoctor from './FindADoctor';

describe('<FindADoctor />', () => {

    beforeEach(() => {
        // Mock geolocation navigator to simulate users location
        const mockGeolocation = {
            getCurrentPosition: jest.fn().mockImplementationOnce((success) => Promise.resolve(success({
                coords: {
                  latitude: 55.783573,
                  longitude: -3.897663
                }
            })))
        };
          
        global.navigator.geolocation = mockGeolocation;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should match snapshot', async () => {
        // TODO: Work out way to mock map, currently just rendering default "loading" div
        const { asFragment } = render(<FindADoctor />);
        
        expect(asFragment()).toMatchSnapshot();
    });
});