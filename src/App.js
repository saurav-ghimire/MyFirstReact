import React from 'react';
import PageWrapper from './FileComponent/PageWrapper';

import Home from './FileComponent/pages/Home';
import About from './FileComponent/pages/About';
import Services from './FileComponent/pages/Services';
import Portfolio from './FileComponent/pages/Portfolio';
import Team from './FileComponent/pages/Team';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App(){
  return (
    <Router>
    <PageWrapper>
        <Route
          exact = {true}
          path = "/"
          component = {Home}
        />
        <Route 
          path = "/about"
          component = {About}
        />
        <Route 
          path = "/services"
          component = {Services}
        />
        <Route 
          path = "/portfolio"
          component = {Portfolio}
        />
        <Route 
          path = "/team"
          component = {Team}
        />
        
        </ PageWrapper>
    </Router>
    
  );
}

export default App;
