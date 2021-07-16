import { render, waitFor } from '@testing-library/react';
import * as React from 'react';
import mockAxios from 'axios';
import Data from './Data';

const mock: any = mockAxios;

describe('Data', () => {
  it('should render', async () => {
    mock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          testApi: { data1: 'hello', data2: 'hello' },
        },
      }),
    );
    const { asFragment, queryByText } = render(<Data />);
    await waitFor(() => queryByText('hello'));
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Data: hello')).toBeTruthy();
  });
});
