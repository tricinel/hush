import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { IExercise } from '../types/Exercise';
import Card from './Card';
import Timer from './Timer';
import { Title, Paragraph, StyledLink } from './Typography';
import Circle from './Circle';

interface IExerciseProps {
  exercises: IExercise[];
}

const Exercise: React.SFC<RouteComponentProps & IExerciseProps> = ({
  path,
  exercises
}) => {
  const exercise = exercises.find(({ id }) => id === path);

  return (
    <Card type="plain">
      <Title>{exercise.title}</Title>
      <Timer breathSet={exercise.breaths} repeat={exercise.repeat}>
        {(breath, done) => (
          <>
            {breath && (
              <>
                <Circle>{breath.title}</Circle>
                <Paragraph>{breath.instructions || '...'}</Paragraph>
              </>
            )}
            {done && (
              <>
                <Circle>All done...</Circle>
                <p>
                  <StyledLink to="/">Try another exercise</StyledLink>
                </p>
              </>
            )}
          </>
        )}
      </Timer>
    </Card>
  );
};

export default Exercise;
