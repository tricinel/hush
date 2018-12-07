import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Title, Paragraph } from './Typography';

const Home: React.SFC<RouteComponentProps> = () => (
  <>
    <Title>Ready to breathe?</Title>
    <Paragraph>
      Stressed? Tired? Anxious? Try any of our breathing exercises to help you
      relax and achieve a clear state of mind.
    </Paragraph>
  </>
);

export default Home;
