import React from 'react';
import {Button, Form, Grid, Image, Segment, Icon} from 'semantic-ui-react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';

import { useForm } from '../util/hooks';

function PostForm() {

    const {values, onChange, onSubmit}  = useForm(createPostCallback, {
        body: ''
    });

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(_, result) {
            console.log(result)
            values.body = '';
        }
    })

    function createPostCallback() {
        createPost();
    }

    return (
        <Form onSubmit = {onSubmit}>
            {/* <h2>Create a post: </h2> */}
            <Segment>
            <Form.Field>
                <div className="form-avatar">
                    <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' avatar verticalAlign='middle' size='tiny'/>           
                    <Form.Input size='large' width='13'
                        placeholder = "What's Happening?"
                        name="body"
                        onChange={onChange}
                        value={values.body}
                    />
                </div>
                <Grid.Column className="btn-submit">
                    <div>
                            <Icon name="large image outline" className="sub-buttons" color="teal" aria-label='image upload'/>
                            <Icon name="large file video" className="sub-buttons" color="teal" aria-label='video upload'/>
                    </div>

                    <Button type = "submit" color="teal" content="Post" />
                </Grid.Column>
            </Form.Field>

            </Segment>
        </Form>
    )
}

const CREATE_POST_MUTATION = gql `
mutation ($body: String!) {
  createPost(body: $body) {
    id
    body
    createdAt
    username
    likes {
        id username createdAt
    }
    likeCount 
    comments {
        id body username createdAt
    }
    commentCount
  }
}
`

export default PostForm