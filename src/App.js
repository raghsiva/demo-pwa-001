import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './LoginScreen'
import Router from './Router'
import Location from './Location'
import Cameraview from './Cameraview'
import Notify from './Notify'
import { initializeFirebase } from './Push-notification'
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}
initializeFirebase();
export default App;
