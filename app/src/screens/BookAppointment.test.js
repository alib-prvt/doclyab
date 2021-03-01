import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookAppointment from './BookAppointment';
import DoctorsService from '../services/DoctorsService';

// Mocks
const testPlaceId = 1234567;


describe('<BookAppointment />', () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<BookAppointment placesId={testPlaceId} />);
        expect(asFragment()).toMatchSnapshot();
    });
});