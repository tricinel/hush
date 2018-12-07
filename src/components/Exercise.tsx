import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { IExercise } from '../types/Exercise';
import Card from './Card';
import { Title } from './Typography';

interface IExerciseProps {
  exercises: IExercise[];
}

const Exercise: React.SFC<RouteComponentProps & IExerciseProps> = ({
  path,
  exercises
}) => {
  const exercise = exercises.find(({ id }) => id === path);

  return (
    <Card>
      <Title>{exercise.title}</Title>
    </Card>
  );
};

export default Exercise;
