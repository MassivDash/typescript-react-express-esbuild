import React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="bg-gray-200 grid grid-cols-1 lg:grid-cols-5 gap-2">
      <div className="m-3">
        <p>Build and designed with ❤ by Spaceout.pl</p>
        <p>Made with React framework</p>
        <p>Source code at github</p>
      </div>
    </footer>
  );
};

export default Footer;
