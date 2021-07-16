import React from 'react';
import { Main } from '@components';

const Home: React.FunctionComponent = () => {
  return (
    <Main>
      <h1 className="text-center text-2xl text-indigo-900 w-full h-64">
        Esbuild only setup
      </h1>
      <h2 className="text-center text-lg w-full h-44">
        This boilerplate is experimental typescript, react, node.js (express)
        setup, completly dropping webpack family in favor of new Esbuild
        package. Project uses tailwindcss as the main css framework
      </h2>
    </Main>
  );
};

export default Home;
