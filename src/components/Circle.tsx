import React from 'react';
import styled from '@emotion/styled';

interface ICircle {
  type?: 'default' | 'complete';
}

const circle = {
  size: 240,
  colors: {
    default: {
      bg: 'rgba(52, 152, 219, 0.1)',
      border: '#2980b9',
      text: '#2980b9'
    },
    complete: {
      bg: 'rgba(26, 188, 156, 0.1)',
      border: '#16a085',
      text: '#16a085'
    }
  }
};

const OuterCircle = styled.div`
  background-color: ${(props: ICircle) => circle.colors[props.type].bg};
  border: 2px solid ${(props: ICircle) => circle.colors[props.type].border};
  border-radius: 50%;
  display: inline-block;
  margin: 40px;
  position: relative;
  height: ${circle.size}px;
  width: ${circle.size}px;
`;

const TextCircle = styled.div`
  color: ${(props: ICircle) => circle.colors[props.type].text};
  line-height: ${circle.size}px;
  text-align: center;
`;

const Circle: React.SFC<ICircle> = ({ children, type = 'default' }) => (
  <OuterCircle type={type}>
    <TextCircle type={type}>{children}</TextCircle>
  </OuterCircle>
);

export default Circle;
