import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Link, useNavigate} from 'react-router-dom';


function Profile({ user }) {

    const {loading, data} = useQuery(GET_USER_QUERY, {
        variables: { username: (user ? user.username : "Aparesh") }
    });

    if (loading || !data.getUser) {
        return <div>Loading profile data...</div>;
      }
     
    var imgSrc = data.getUser.iconUrl || 'https://react.semantic-ui.com/images/avatar/large/matthew.png';
    
    return (
        <Card fluid>
            <Image src={imgSrc} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{data.getUser.username}</Card.Header>
                <Card.Meta>Member since {moment(data.getUser.createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                    {data.getUser.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href="/">
                    <Icon name='user' />
                    {Math.floor(10 + Math.random() * 12)} connections
                </a>
                <br />
                <a href="/">
                    <Icon name = "basketball ball" />
                    Power Forward
                </a>
            </Card.Content>
        </Card>
    )

}

const GET_USER_QUERY = gql`
query($username: String!) {
  getUser(username: $username) {
    username
    createdAt
    email
    id
    description
    iconUrl
  }
}

`

export default Profile