import React, { useContext } from 'react'
import { Progress, Grid, Segment, Container, CardHeader, CardContent, Checkbox, Divider, Button, Icon } from 'semantic-ui-react'

import { AuthContext } from '../context/auth';
import Profile from '../components/Profile';

function Roadmap() {

    const { user } = useContext(AuthContext);
    return (
        <Container fluid>
            <Grid columns='equal'>
                <Grid.Column stretched width={4}>
                    <Grid.Row stretched>
                        <Profile user={user} />
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column>
                    <div class="head">
                        <p class="head_1">Road<span>Map</span></p>
                    </div>
                    <h4>Welcome Back {user.username}!</h4>
                    <h5 className="sport-desc">Chess is a fascinating game with a rich history that dates back to the 6th century. If you're interested in learning how to play, there are several steps you can take to get started. The first step is to familiarize yourself with the rules of the game, such as the movement of the pieces and the objective of the game. From there, you can begin practicing by playing games against others, either in person or online. As you continue to play, it's helpful to study basic tactics and strategies and learn from experienced players through books, videos, or lessons. Consistent practice and analysis of your games will help you improve and gain a better understanding of the game. With dedication and perseverance, anyone can become a skilled chess player.</h5>
                </Grid.Column>
                <Grid.Column>
                    <Progress
                        value='2'
                        total='5'
                        progress='ratio'
                        color='teal'
                        active
                    />
                    <Segment>
                        <CardHeader>
                            <h3>Today's Task</h3>
                        </CardHeader>
                        <Divider />
                        <CardContent>
                            <Segment>
                                <Checkbox label = "Learn King's opening" defaultChecked/>
                            </Segment>
                            <Segment>
                                <Checkbox label = "Play 3 matches on lichess" defaultChecked/>
                            </Segment>
                            <Segment>
                                <Checkbox label = "Study basic tactics" defaultChecked/>
                            </Segment>
                            <Segment>
                                <Checkbox label = "Analyze your games to identify mistakes and areas for improvement" />
                            </Segment> 
                            <Segment>
                                <Checkbox label = "Analyze your opening" />
                            </Segment>
                        </CardContent>
                        <Divider />
                            <CardContent extra>
                                <Button animated color='teal' position="right">
                                <Button.Content visible>Next</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                                </Button>
                            </CardContent>
                    </Segment>
                </Grid.Column>
            </Grid>

        </Container>
    )
}

export default Roadmap