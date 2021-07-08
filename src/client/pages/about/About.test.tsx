import { render } from '@testing-library/react';
import React from 'react';
import About from './About';

describe('About', () => {
    
    it('should render', () => {
        const { asFragment, queryByText } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('About')).toBeTruthy();
    });
});
