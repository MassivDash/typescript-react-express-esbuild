import { render } from '@testing-library/react';
import * as React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: '5nvxpbdafa',
    }),
  }));

  it('should render', () => {
    const { asFragment, queryByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Home')).toBeTruthy();
  });
});
