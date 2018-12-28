import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { IExercise } from '../types/Exercise';
import Card from './Card';
import { Title, Paragraph, StyledLink, Subtitle } from './Typography';
import Circle from './Circle';
import Bar from './Bar';
import useBreathing from '../useBreathing';
import useProgress from '../useProgress';

interface IExerciseProps {
  exercise: IExercise;
}

const Exercise: React.SFC<RouteComponentProps & IExerciseProps> = ({
  exercise
}) => {
  const totalTime = exercise.breaths.reduce(
    (total, current) => total + current.duration * exercise.repeat,
    0
  );

  const { breath, done } = useBreathing(exercise);
  const { percentage, remaining } = useProgress(totalTime);

  return (
    <Card type="plain">
      <Title>{exercise.title}</Title>
      <>
        {breath && (
          <>
            <Circle>{breath.title}</Circle>
            <Paragraph>{breath.instructions || '...'}</Paragraph>
            <p>Remaining:</p>
            <Subtitle>{Math.ceil(remaining / 1000)}s</Subtitle>
            <Bar style={{ width: `${percentage}%` }} />
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
    </Card>
  );
};

export default Exercise;
