import React from 'react';
import HomePhoto from '../assets/homephoto.jpg';

export default function Home() {
  return (
    <div id="home-page">
      {/* <img id="home-background" src={HomePhoto} alt="Gabe at Area 15" /> */}
      <div id="home-title-container">
        <h3>{'Hello, I\'m'}</h3>
        <h1>Gabe Eaton</h1>
        <h2>I am an Implementation & Data Solutions Engineer</h2>
      </div>
    </div>
  );
}
