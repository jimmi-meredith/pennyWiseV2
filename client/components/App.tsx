import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Landing from './Landing';
import { ISample } from './Nav/interface';

const App = () => {
  const sample: ISample[] = [
    {
      id: 1,
      name: 'Sample'
    }
  ];

  return (
    <HashRouter>
      <Nav sample={sample} />
      <Route exact path="/" component={Landing} />
    </HashRouter>
  );
};

export default App;
