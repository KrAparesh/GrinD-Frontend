import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';
import {Link} from 'react-router-dom'

// Addition
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {
  const {loading, data} = useQuery(GET_USER_QUERY, {
    variables: { username: username }
});

var currUser = "null";
if(!loading){
    currUser = data?.getUser;
    console.log(currUser);

}
var imgSrc = "";
if(currUser){
    if(!currUser.iconUrl){
        imgSrc = "https://react.semantic-ui.com/images/avatar/large/matthew.png"
    } else {
        imgSrc = currUser.iconUrl;
    }
}

  function likePost() {
    console.log('Like Post!');
  }

  function commentOnPost() {
    console.log("Comment on post!!");
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src = {imgSrc}
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`} > {moment(createdAt).fromNow(false)}</Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>

        {/* Adding like button */}
        
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button color='teal' basic>
            <Icon name='heart' />
          </Button>
          <Label basic color='teal' pointing='left'>
            {likeCount}
          </Label>
        </Button>

        {/* Adding comment button */}

        <Button as='div' labelPosition='right' onClick={commentOnPost}>
          <Button color='blue' basic>
            <Icon name='comments' />
          </Button>
          <Label basic color='blue' pointing='left'>
            {commentCount}
          </Label>
        </Button>
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

export default PostCard