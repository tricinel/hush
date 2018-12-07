import React from 'react';
import { render } from 'react-dom';
import { Global, css } from '@emotion/core';
import normalize from 'normalize.css';
import Home from './components/Home';
import { Router } from '@reach/router';

const appStyles = `
  body {
    background-image: url('https://images.unsplash.com/photo-1524865291454-215bdc75819e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=545694f77b729b6870e21fbb44752a5d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb');
    background-size: cover;
    background-repeat: none;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
  }
`;

const App = () => (
  <>
    <Global
      styles={css`
        ${normalize}
        ${appStyles}
      `}
    />
    <Router>
      <Home path="/" />
    </Router>
  </>
);

render(<App />, document.getElementById('hush'));
