import { render } from '@testing-library/react';
import React from 'react';
import NavItem, { NavItemProps } from './NavItem';

describe('NavItem', () => {
  const defaultProps: NavItemProps = {
    item: {
      text: 'Home',
      path: '/',
    },
  };

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<NavItem {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Home')).toBeTruthy();
  });
});
