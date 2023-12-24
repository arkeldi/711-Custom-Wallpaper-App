import React from 'react';
import logo from './logo.svg';
import './App.css';
import wallpaper from './images/711BG1080.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
