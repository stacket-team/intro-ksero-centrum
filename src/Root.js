import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { Router, Switch, Route } from "react-router-dom";
import { ROUTES } from 'utils/Routes/Routes';
import History from 'utils/History/History';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Services from 'views/Services/Services';

const client = new ApolloClient({
  uri: `${ process.env.REACT_APP_API }/graphql`,
});

const Root = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Router history={History}>
      <Switch>
        <Route exact path={ROUTES.home} component={null} />
        <Route exact path={ROUTES.services} component={Services} />
        <Route exact path={ROUTES.contact} component={null} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default Root;