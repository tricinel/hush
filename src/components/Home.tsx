import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Title, Subtitle, Paragraph, StyledLink } from './Typography';
import Card from './Card';
import { IExercise } from '../types/Exercise';
import Grid from './Grid';

interface IHomeProps {
  exercises: IExercise[];
}

const Home: React.SFC<RouteComponentProps & IHomeProps> = ({ exercises }) => (
  <>
    <Title>Ready to breathe?</Title>
    <Paragraph>
      Stressed? Tired? Anxious? Try any of our breathing exercises to help you
      relax and achieve a clear state of mind.
    </Paragraph>

    <Grid>
      {exercises.map(exercise => (
        <Card key={exercise.id}>
          <Subtitle>{exercise.title}</Subtitle>
          <Paragraph>{exercise.description}</Paragraph>
          <StyledLink to={exercise.id}>Start</StyledLink>
        </Card>
      ))}
    </Grid>
  </>
);

export default Home;
