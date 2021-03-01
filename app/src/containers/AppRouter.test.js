import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppRouter from './AppRouter';

describe('<AppRouter />', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<AppRouter />);
        expect(asFragment()).toMatchSnapshot();
    });
});