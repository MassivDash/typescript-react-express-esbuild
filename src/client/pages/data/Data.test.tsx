import { render } from '@testing-library/react';
import React from 'react';
import Data from './Data';

describe('Data', () => {
  it('should render', () => {
    const { asFragment, queryByText } = render(<Data />);
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Data')).toBeTruthy();
  });
});
