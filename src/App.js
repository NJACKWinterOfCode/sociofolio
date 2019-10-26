import React from 'react';
import Index from './pages/index';

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
      <div className="App">
          <Switch>
            <Route exact path="/" component={Index}/>
          </Switch>
      </div>
    )
  }
}

export default App;
