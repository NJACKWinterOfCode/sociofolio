import React from 'react';
import {  Button, Form, List, Card, Icon, Image, Menu,Container } from 'semantic-ui-react';

class Config extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            url:""
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleItemClick(){

    }

    componentDidMount(){
        fetch('https://hasuragraphql-engine.herokuapp.com/v1alpha1/graphql', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            query: `query ($id: String!){
                users (where: {id: {_eq: $id}}) {
                    name
                    image
                }
            }`,
            variables: {
                id: localStorage.getItem("sub")
            }
            }),
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            if(data.data.users.length!==0){
                this.setState({name:data.data.users[0].name,url:data.data.users[0].image});
            }
        })
    }

    submit(){
        fetch('https://hasuragraphql-engine.herokuapp.com/v1alpha1/graphql', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            query: `mutation ($name: String!,$id: String!,$url: String!) {
                insert_users(objects: [{
                    name: $name
                    id: $id
                    image: $url
                }],
                on_conflict: {
                    constraint: users_pkey,
                    update_columns: [name, image]
                }
                ) {
                    returning {
                        id
                    }
                }
            }`,
            variables: {
                name: this.state.name,
                url: this.state.url,
                id: localStorage.getItem("sub")
            }
            }),
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            this.props.history.push("/profile");
        })
    }

    onUrlChange(e){
        this.setState({url:e.target.value});
    }

    onNameChange(e){
        this.setState({name:e.target.value});
    }

    render(){
        const activeItem = "features";
        
        return (
            <>
                <Card style={{padding:"2%"}} centered fluid>
                <Form>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Name'
                            value={this.state.name}
                            onChange={(e)=>this.onNameChange(e)}
                            placeholder='aswinzz'
                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='Image'
                            value={this.state.url}
                            onChange={(e)=>this.onUrlChange(e)}
                            placeholder='https://imageurl.com'
                        />
                </Form>
                <br/>
                <Button primary onClick={this.submit}>Save</Button>
                </Card>
            </>
        )
    }
}

export default Config;