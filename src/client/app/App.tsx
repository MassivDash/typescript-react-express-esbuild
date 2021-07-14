import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, AboutPage, DataPage } from '../pages';
import { Header, Footer } from '@components';

const App: React.FunctionComponent<unknown> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route exact={true} path={'/about'} component={AboutPage} />
        <Route exact={true} path={'/data'} component={DataPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
