import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

import Home from "./Containers/Pages/Home";
import Dashboard from "./Containers/Pages/Dashboard";

const App: React.FC = () => {
  return (

          <BrowserRouter>
              <div className="App">
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/dashboard" component={Dashboard} />
                  </Switch>
              </div>
          </BrowserRouter>

  );
};

export default App;
