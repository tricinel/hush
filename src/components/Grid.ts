import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
`;

export default Grid;
