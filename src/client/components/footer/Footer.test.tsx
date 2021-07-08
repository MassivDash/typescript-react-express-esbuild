import { render } from '@testing-library/react';
import React from 'react';
import Footer, { FooterProps } from './Footer';

describe('Footer', () => {
    const defaultProps: FooterProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Footer {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Footer')).toBeTruthy();
    });
});
