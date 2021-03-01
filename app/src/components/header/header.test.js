import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';

describe('<Header />', () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('should render header component', () => {
        render(<Header />);

        expect(screen.getByTestId('logo')).toHaveTextContent('Doc.ly')
    });
});