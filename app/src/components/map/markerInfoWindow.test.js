import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { navigate } from '@reach/router';
import MarkerInfoWindow from './markerInfoWindow';

// Mocks
jest.mock('@reach/router', () => ({
    navigate: jest.fn(),
}));

describe('<MarkerInfoWindow />', () => {

    const testPlaceId = 1234567;
    const testOverlayDetails = {
        result: {
            place_id: testPlaceId,
            name: "Test Doctor", 
            formatted_address: "1 Test Street, Glasgow, Scotland",
            formatted_phone_number: "+447954825174"
        }
    };

    it('should match snapshot', () => {
        const { asFragment } = render(<MarkerInfoWindow overlayDetails={testOverlayDetails} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('should not render if overlayDetails not provided', () => {
        render(<MarkerInfoWindow />);

        expect(screen.queryByTestId('marker-info-window')).toBeNull();
    });

    it('should call clearInfoWindow and navigate function on click to book appointment', () => {
        let clearInfoWindowMock = jest.fn();
        render(<MarkerInfoWindow 
            overlayDetails={testOverlayDetails} 
            clearInfoWindow={clearInfoWindowMock} />);

        let bookingBtn = screen.getByTestId('book-appointment-btn');

        fireEvent(bookingBtn,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(clearInfoWindowMock).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledTimes(1);
    });
});