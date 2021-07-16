import React, { useEffect, useState } from 'react';
import { Main } from '@components';
import { instance as axiosInstance } from '@axios';

const Data: React.FunctionComponent<unknown> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const data = await axiosInstance.get('data');
        setIsLoading(false);
        setData(data.data.testApi.data1);
        // eslint-disable-next-line no-console
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  return (
    <Main>
      {isLoading && <p>loading ...</p>} {!isLoading && <p>Data: {data}</p>}
    </Main>
  );
};

export default Data;
