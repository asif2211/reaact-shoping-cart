import React from "react";
import './App.css';
import {BrowserRouter as  Router, Switch,Route } from "react-router-dom";

import Products from './components/Product/Products'

import Navbar from "./Navbar/Navbar";


function App() {
  return (
    <div>
    <Router>
        <Navbar />
        
        <Switch>
        <Route path="/" exact component={Products} />
          {/* <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Resume" component={Resume} /> */}
        </Switch>
        
       
      </Router>
    </div>
  );
}

export default App;
