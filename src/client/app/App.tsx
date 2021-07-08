import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";


const App: React.FunctionComponent<unknown> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"} component={HomePage} />
        <Route exact={true} path={"/about"} component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
