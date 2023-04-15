import React, {useContext} from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';
 
import { AuthContext } from '../context/auth';

import PostCard from '../components/PostCard';
import PostForm from "../components/PostForm";

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data} = useQuery(FETCH_POSTS_QUERY);

  // If the posts field is undefined, then the below statement will 
  // set it to "null", or set the value accordingly. Hence preventing errors.
  
  const posts = data?.getPosts;   
  
  return (
    <Grid columns={3}>

      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts..</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}

      </Grid.Row>
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
{
  getPosts {
    id 
    body 
    createdAt 
    username 
    likeCount
    likes {
      username
    }
    commentCount
    comments {
      id 
      username 
      createdAt 
      body
    }
  }
}
`

export default Home