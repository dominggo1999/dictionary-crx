import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Options from './Options.jsx';
import GlobalStyles from '~/styles/GlobalStyles.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Options />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
