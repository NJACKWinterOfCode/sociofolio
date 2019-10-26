import React from 'react';
import {  List, Card, Icon, Image, Menu,Container } from 'semantic-ui-react';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={};
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
                            <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            </List.Content>
                            </List.Item>

                            <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            </List.Content>
                            </List.Item>

                            <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            </List.Content>
                            </List.Item>
                            
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