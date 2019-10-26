import React from 'react';
import {  List, Card, Icon, Image, Menu,Container } from 'semantic-ui-react';

const icons = {
        "default":"world",
        "Github":"github",
        "Facebook":"facebook",
        "Twitter":"twitter",
        "Gmail":"mail",
        "Behance":"behance",
        "Youtube":"youtube"
    };

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        fetch('https://hasuragraphql-engine.herokuapp.com/v1alpha1/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query ($user: String!){
            sociofolio (where: {user: {_eq: $user}}) {
              name
              url
            }
          }`,
          variables: {
            user: localStorage.getItem("sub")
          }
        }),
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let urls = data.data.sociofolio;
        for(let i=0;i<urls.length;i++){
            if(urls[i].name in icons){
                urls[i].icon=icons[urls[i].name];
            }
            else{
                urls[i].icon=icons["default"];
            }
        }
        this.setState({urls});
      })
    }

    handleItemClick(){

    }

    render(){
        const activeItem = "features";
        
        return (
            <>
            <Menu inverted stackable>
                <Menu.Item>
                <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
                </Menu.Item>

                <Menu.Item
                name='features'
                active={activeItem === 'features'}
                onClick={this.handleItemClick}
                >
                Features
                </Menu.Item>

                <Menu.Item
                name='testimonials'
                active={activeItem === 'testimonials'}
                onClick={this.handleItemClick}
                >
                Testimonials
                </Menu.Item>

                <Menu.Item
                name='sign-in'
                active={activeItem === 'sign-in'}
                onClick={this.handleItemClick}
                >
                Sign-in
                </Menu.Item>
            </Menu>
            <Container>
                <Card centered>
                    <Image src='https://avatars0.githubusercontent.com/u/25057819' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        <List divided relaxed>
                            {this.state.urls?this.state.urls.map((item)=>{
                                return (
                                    <List.Item>
                                        <List.Icon name={item.icon} size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a' href={item.url}>{item.name}</List.Header>
                                        </List.Content>
                                    </List.Item>
                                )
                            }):""}
                        </List>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        10 Friends
                    </a>
                    </Card.Content>
                </Card>
            </Container>
            </>
        )
    }
}

export default Index;