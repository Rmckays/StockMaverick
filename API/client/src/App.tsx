import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Backdrop from "./Components/Backdrop/Backdrop";

const App: React.FC = () => {
  return (
    <div className="App">
      <Backdrop/>
      <Login />
    </div>
  );
};

export default App;
