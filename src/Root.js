import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { Router, Switch, Route } from "react-router-dom";
import { ROUTES } from 'utils/Routes/Routes';
import History from 'utils/History/History';

const Root = () => (
  <>
    <GlobalStyle />
    <Router history={History}>
      <Switch>
        <Route exact path={ROUTES.home} component={null} />
      </Switch>
    </Router>
  </>
)

export default Root;