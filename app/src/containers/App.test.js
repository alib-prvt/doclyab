import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app';

describe('<App />', () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});