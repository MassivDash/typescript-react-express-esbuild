import { render } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render', () => {
    const { asFragment, queryByText } = render(<Navbar />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Home')).toBeTruthy();
  });
});
