import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001')  // Make a request to the backend
      .then((response) => {
        if (response.ok) {
          setIsFriend(true);
        }
        throw new Error('Access Denied');
      })
      .catch((error) => setIsFriend(false));
  }, []);
  
  return (isFriend ?
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS IS A GOOD WEBSERVER HE IS NOT PROMISCUOUS.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> : <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SUCK MY PUSSY YOU IDIOT.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );
}

export default App;
