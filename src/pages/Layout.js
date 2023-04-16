import React, {useContext} from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid, Segment, Card, CardContent, Image, Icon, Divider, Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom'; 

import { AuthContext } from '../context/auth';

import PostCard from '../components/PostCard';
import PostForm from "../components/PostForm";
import NewsHeadline from "../components/NewsHeadline";
import Profile from "../components/Profile";

function Layout() {
  const { user } = useContext(AuthContext);

  const { loading, data} = useQuery(FETCH_POSTS_QUERY);

  // If the posts field is undefined, then the below statement will 
  // set it to "null", or set the value accordingly. Hence preventing errors.
  
  const posts = data?.getPosts;   

  return (
    <Container fluid>
        <Grid columns={3} divided>
    <Grid.Row stretched>

    {/* Profile Column  */}
      <Grid.Column stretched width={4}>
        <Grid.Row stretched>
            <Profile user={user}/>
        </Grid.Row>
      </Grid.Column>

    {/* Posts column  */}
      <Grid.Column stretched width={8}>
        <Grid.Row stretched >
        </Grid.Row>
            {/* <h3 className='page-title'>Create a Post</h3> */}
            {user && (
            <Grid.Column>
                <PostForm />
            </Grid.Column>
            )}
            <Divider horizontal>Recent Posts</Divider>
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
      </Grid.Column>

    {/* News Column */}
      <Grid.Column stretched width={4}>
        <Grid.Row stretched>
            <Card>
                <Card.Content>
                    <h2>News</h2>
                    <Divider></Divider>
                    <NewsHeadline />
                </Card.Content>
            </Card>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>
    
  );
}


//   return (
//     <Grid columns={3}>

    //   <Grid.Row className="page-title">
    //     <h1>Recent Posts</h1>
    //   </Grid.Row>
    //     {user && (
    //       <Grid.Column>
    //         <PostForm />
    //       </Grid.Column>
    //     )}
    //   <Grid.Row>
    //     {loading ? (
    //       <h1>Loading Posts..</h1>
    //     ) : (
    //       posts &&
    //       posts.map((post) => (
    //         <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
    //           <PostCard post={post} />
    //         </Grid.Column>
    //       ))
    //     )}

    //   </Grid.Row>
//     </Grid>
//   );
//}

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

export default Layout