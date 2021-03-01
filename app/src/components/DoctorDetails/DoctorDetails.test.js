import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DoctorDetails from './DoctorDetails';

const testDetails = {
    name: "Test Doctor", 
    formatted_address: "1 Test Street, Glasgow, Scotland",
    formatted_phone_number: "+447954825174"
};

describe('<DoctorDetails />', () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<DoctorDetails details={testDetails} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render with given details', () => {
        render(<DoctorDetails details={testDetails} />);

        expect(screen.getByTestId('doctor-name')).toHaveTextContent(testDetails.name);
        expect(screen.getByTestId('doctor-address')).toHaveTextContent(testDetails.formatted_address);
        expect(screen.getByTestId('doctor-phone')).toHaveTextContent(testDetails.formatted_phone_number);
    });

    it('should render null if no details are provided', () => {
        render(<DoctorDetails />);
        
        expect(screen.queryByTestId('doctor-details')).toBeNull();
    });
});