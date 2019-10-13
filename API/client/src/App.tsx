import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer.";
import Header from "./Components/Header/Header";
import Backdrop from "./Components/Backdrop/Backdrop";
import Navigation from "./Components/Navigation/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <Backdrop/>
      <Header />>
      <Navigation/>
      <Login />
      <Footer/>
    </div>
  );
};

export default App;
