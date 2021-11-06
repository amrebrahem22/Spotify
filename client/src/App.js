import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './pages/Login/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from "./StateProvider";

const s = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    let hash = getTokenFromResponse();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      s.setAccessToken(_token);

      s.getMe().then(user => {
        console.log(user);
      })
    }

    console.log('I got the token -> ', token);

  }, [token])

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
