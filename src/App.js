import React from 'react';
import './App.css';
import Navbar from './components/NavBar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/pages/about';
import Services from './components/pages/services';
import Contact from './components/pages/contact';
import SignUp from './components/pages/signup';
import Hero from './components/Hero/index';

import Cards from './components/trending/Cards';

import Gap from './components/gap/index';

import FContainer from './components/choose-us/group';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Hero/>
      <Cards/>
    <Gap/>
    
    <FContainer/>
      
    
      

    </Router>
  );
}

export default App;
