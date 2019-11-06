import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

import Home from "./Containers/Pages/Home";
import Dashboard from "./Containers/Pages/Dashboard";
import Portfolio from "./Containers/Pages/Portfolio";
import Wallet from "./Containers/Pages/Wallet";
import {observer} from "mobx-react-lite";
import RootStoreContext from './Stores/rootStore'


const App: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {resetTransaction} = rootStore.stockStore;

  return (

          <BrowserRouter>
              <div className="App">
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/dashboard" component={Dashboard} />
                      <Route exact path="/portfolio" component={Portfolio} />
                      <Route exact path="/wallet" component={Wallet} />
                  </Switch>
              </div>
          </BrowserRouter>

  );
};

export default observer(App);
