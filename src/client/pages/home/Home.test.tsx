import { render } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('Home', () => {
  it('should render', () => {
    const { asFragment, queryByText } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Esbuild only setup')).toBeTruthy();
  });
});
