import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Results, Rewards, Question } from './templates';

const createRoutes = () => (
  <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/result" component={Results} />
      <Route exact path="/pick-reward" component={Rewards} />
      <Route path="/q/:id" component={Question} />
    </Router>
  </>
);

export default createRoutes;