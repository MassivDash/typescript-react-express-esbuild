import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    const { asFragment, queryByText } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Made with React framework')).toBeTruthy();
  });
});
