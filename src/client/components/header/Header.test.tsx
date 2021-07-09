import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header', () => {


    it('should render', () => {
        const { asFragment, queryByText } = render(<Header />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Header')).toBeTruthy();
    });
});
