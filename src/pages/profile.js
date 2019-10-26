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

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            image:""
        };
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
              id
              name
              image
              links {
                name
                url
              }
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
            this.setState({name:data.data.users[0].name,image:data.data.users[0].image});
            let urls = data.data.users[0].links;
            for(let i=0;i<urls.length;i++){
                if(urls[i].name in icons){
                    urls[i].icon=icons[urls[i].name];
                }
                else{
                    urls[i].icon=icons["default"];
                }
            }
            this.setState({urls});
        }
      })
    }

    handleItemClick(){

    }

    render(){
        const activeItem = "features";
        
        return (
            <>
                <Card centered>
                    <Image src={this.state.image} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{this.state.name}</Card.Header>
                    {/* <Card.Meta>Joined in 2016</Card.Meta> */}
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
                    {/* <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        10 Friends
                    </a>
                    </Card.Content> */}
                </Card>
            </>
        )
    }
}

export default Profile;