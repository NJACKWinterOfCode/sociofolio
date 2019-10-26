import React from 'react';
import {  Button, Form, List, Card, Icon, Image, Menu,Container } from 'semantic-ui-react';

class Create extends React.Component {
    constructor(props){
        super(props);
        let urls = [
            {
                name:"",
                url:""
            }
        ]
        this.state={
            urls
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.addMore = this.addMore.bind(this);
    }

    handleItemClick(){

    }

    onUrlChange(e,index){
        let urls = this.state.urls;
        urls[index].url=e.target.value;
        this.setState({urls});
    }

    onNameChange(e,index){
        let urls = this.state.urls;
        urls[index].name=e.target.value;
        this.setState({urls});
    }

    addMore(){
        let urls = this.state.urls;
        urls.push({
            name:"",
            url:""
        });
        this.setState({urls});
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
            <Container style={{width:"40%"}}>
                <Card style={{padding:"2%"}} centered fluid>
                <Form>
                    {this.state.urls.map((item,index)=>{
                        return (
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    id='form-subcomponent-shorthand-input-first-name'
                                    label='Name'
                                    value={this.state.urls[index].name}
                                    onChange={(e)=>this.onNameChange(e,index)}
                                    placeholder='Facebook'
                                />
                                <Form.Input
                                    fluid
                                    id='form-subcomponent-shorthand-input-last-name'
                                    label='Url'
                                    value={this.state.urls[index].url}
                                    onChange={(e)=>this.onUrlChange(e,index)}
                                    placeholder='https://facebook.com/qwerty'
                                />
                            </Form.Group>
                        )
                    })}
                </Form>
                <Button secondary onClick={this.addMore}>Add</Button><br/>
                <Button primary onClick={this.addMore}>Create</Button>
                </Card>
            </Container>
            </>
        )
    }
}

export default Create;