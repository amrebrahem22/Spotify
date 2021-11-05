import React, { useEffect } from 'react'
import './App.css';
import Login from './pages/Login/Login';
import { getTokenFromResponse } from './spotify';

function App() {

  useEffect(() => {
    let token = getTokenFromResponse();
    console.log('I got the token -> ', token);
  }, [])

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
