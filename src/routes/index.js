import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SearchAstriod from '../controller/SearchAstriod';
import DisplayAstroid from '../controller/DisplayAstroid';

const index = () => {
  return (
    <div>
      <HashRouter>
        <Route path="/" component={SearchAstriod} exact />
        <Route path="/:id" component={DisplayAstroid} exact />
      </HashRouter>
    </div>
  );
};

export default index;
