import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './LoginScreen'
import Router from './Router'
import Location from './Location'
import Cameraview from './Cameraview'
function App() {
  return (
    <div className="App">
      <Cameraview />
    </div>
  );
}

export default App;
