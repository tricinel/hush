import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { IExercise } from '../types/Exercise';
import Card from './Card';
import Timer from './Timer';
import { Title, Paragraph, StyledLink, Subtitle } from './Typography';
import Circle from './Circle';
import Bar from './Bar';
import Progress from './Progress';

interface IExerciseProps {
  exercise: IExercise;
}

const Exercise: React.SFC<RouteComponentProps & IExerciseProps> = ({
  exercise
}) => {
  const totalTime = exercise.breaths.reduce(
    (total, breath) => total + breath.duration * exercise.repeat,
    0
  );

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
                <Progress duration={totalTime}>
                  {(percentage, remaining) => (
                    <>
                      <p>Remaining:</p>
                      <Subtitle>{Math.ceil(remaining / 1000)}s</Subtitle>
                      <Bar style={{ width: `${percentage}%` }} />
                    </>
                  )}
                </Progress>
              </>
            )}
            {done && (
              <>
                <Circle type="complete">All done...</Circle>
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
