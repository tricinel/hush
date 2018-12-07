import styled from '@emotion/styled';

interface ICard {
  type?: 'plain' | 'boxed';
}

const Card = styled.div`
  background-color: ${(props: ICard) =>
    props.type === 'plain' ? 'transparent' : 'rgba(255, 255, 255, 0.24)'};
  border: ${(props: ICard) =>
    props.type === 'plain' ? 'none' : '1px solid #2c3e50'};
  border-radius: 4px;
  min-height: 150px;
  margin: 8px;
  padding: 16px 32px;
  text-align: center;

  &:hover {
    background-color: ${(props: ICard) =>
      props.type === 'plain' ? 'transparent' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

export default Card;
