import styled from '@emotion/styled';
import { Link } from '@reach/router';

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
`;

const Subtitle = styled(Title.withComponent('h2'))`
  color: #2980b9;
`;

const Paragraph = styled.p`
  line-height: 140%;
  text-align: center;
`;

const StyledLink = styled(Link)`
  background-color: #3498db;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 1.2em;
  margin: 8px 0;
  padding: 12px 32px 11px 32px;
  text-align: center;
  text-decoration: none;
`;

export { Title, Paragraph, Subtitle, StyledLink };
