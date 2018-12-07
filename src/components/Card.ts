import styled from '@emotion/styled';

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.24);
  border: 1px solid #2c3e50;
  border-radius: 4px;
  min-height: 150px;
  margin: 8px;
  padding: 16px 32px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export default Card;
