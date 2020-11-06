import React from "react";
import './App.css';
import {BrowserRouter as  Router, Switch,Route } from "react-router-dom";
import Products from './components/Product/Products'
import Navbar from "./Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import WeatherData from "./Pages/weather/WeatherData";

function App() {
  return (
    <Provider store={store}>
    <div>

    <Router>
        <Navbar />
        
        <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/WeatherData" component={WeatherData} />
          {/* <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Resume" component={Resume} /> */}
        </Switch>
        
       
      </Router>
    </div>
    </Provider>
  );
}

export default App;
