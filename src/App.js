import React from 'react';
import Index from './pages/index';
import Create from './pages/create';
import './styles.css';
import Auth from './auth/auth';
import Callback from './pages/callback';
import client from "./apollo";
import { ApolloProvider } from "react-apollo";
import Config from './pages/config';
import Profile from './pages/profile';
import {  Segment, Header, Grid, Responsive , List, Card, Icon, Image, Menu,Container } from 'semantic-ui-react';
import Page from './pages/page';
import history from './history';

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

const activeItem="features";

const handleItemClick=()=>{

}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

  componentDidMount(){
    console.log("LS",localStorage.getItem("sub"));
    if(localStorage.getItem("sub")){
      this.setState({loggedIn:true});
    }
    else{
      this.setState({loggedIn:false});
    }
  }

  render(){
    return (
      <Responsive>
                <Menu inverted stackable>
                  <Menu.Item>
                  <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
                  </Menu.Item>
  
                  {this.state.loggedIn?
                  <Menu.Menu position='right'>
                    <Menu.Item
                    name='create'
                    active={activeItem === 'create'}
                    onClick={()=>history.replace('/create')}
                    >
                    Add Link
                    </Menu.Item>
                    <Menu.Item
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={()=>history.replace('/profile')}
                    >
                    Profile
                    </Menu.Item>
                    <Menu.Item
                    name='sign-out'
                    active={activeItem === 'sign-out'}
                    onClick={()=>{
                      auth.logout();
                      this.setState({loggedIn:false});
                    }}
                    >
                    Sign Out
                    </Menu.Item>
                  </Menu.Menu>
                  :
                  <Menu.Item
                  name='sign-in'
                  active={activeItem === 'sign-in'}
                  onClick={()=>{
                    auth.login();
                  }}
                  position="right"
                  >
                  Sign-in
                  </Menu.Item>
                  }
              </Menu>
              <Container>
                <ApolloProvider client={client}>
                <Switch>
                        <Route exact path="/create" render={(props)=><Create auth={auth} {...props}/>}/>
                        <Route exact path="/config" render={(props)=><Config auth={auth} {...props}/>}/>
                        <Route exact path="/profile" render={(props)=><Profile auth={auth} {...props}/>}/>
                        <Route path="/callback" render={(props) => {
                          handleAuthentication(props);
                          return <Callback {...props} />
                        }} />
                        <Route exact path="/:name" render={(props)=><Page auth={auth} {...props}/>}/>
                        <Route exact path="/" render={(props)=><Index auth={auth} {...props}/>}/>
                </Switch>
                </ApolloProvider>
              </Container>
              <Segment inverted vertical style={{ position:'absolute',bottom:0,width:"100%" }}>
                <Container>
                  <Grid centered style={{padding:"1%"}}>
                        Made with ❤️ by aswinzz
                  </Grid>
                </Container>
              </Segment>
        </Responsive>
    )
  }
}


export default App;
