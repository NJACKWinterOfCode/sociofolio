import React from 'react';
import Index from './pages/index';
import Create from './pages/create';
import './styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <>
          <Switch>
            <Route exact path="/create" component={Create}/>
            <Route exact path="/" component={Index}/>
          </Switch>
      </>
    )
  }
}

export default App;
