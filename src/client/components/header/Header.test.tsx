import { render } from '@testing-library/react';
import React from 'react';
import Header, { HeaderProps } from './Header';

describe('Header', () => {
    const defaultProps: HeaderProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Header {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Header')).toBeTruthy();
    });
});
