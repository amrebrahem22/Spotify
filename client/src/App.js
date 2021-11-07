import React, { useEffect } from 'react'
import './App.css';
import Login from './pages/Login/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from "./StateProvider";
import Player from './pages/player/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useStateValue();

  useEffect(() => {
    let hash = getTokenFromResponse();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then(user => {
        console.log(user)
        dispatch({
          type: 'SET_USER',
          user
        })
      })
      
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists)
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      
      spotify.getPlaylist("37i9dQZF1E38BgR8SvwiUh").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
    }


  }, [dispatch, token])

  return (
    <div className="app">
      {!token ? <Login /> : <Player spotify={spotify} />}
    </div>
  );
}

export default App;
