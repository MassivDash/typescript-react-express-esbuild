import React, { ReactElement } from 'react';

export interface MainProps {
  children: ReactElement;
}

const Main: React.FunctionComponent<MainProps> = ({ children }) => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      {children}
    </main>
  );
};

export default Main;
