import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer.";
import Header from "./Components/Header/Header";
import Backdrop from "./Components/Backdrop/Backdrop";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from './Containers/Pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
