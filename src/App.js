import React from 'react';
import Index from './pages/index';
import Create from './pages/create';
import './styles.css';
import Auth from './auth/auth';
import Callback from './pages/callback';
import client from "./apollo";
import { ApolloProvider } from "react-apollo";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => {
  return (
    <ApolloProvider client={client}>
    <Switch>
            <Route exact path="/create" render={(props)=><Create auth={auth} {...props}/>}/>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
            <Route exact path="/" component={Index}/>
    </Switch>
    </ApolloProvider>
  )
}

export default App;
