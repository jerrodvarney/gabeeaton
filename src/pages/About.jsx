import React from 'react';
import AboutPhoto from '../assets/aboutphoto.jpg';

export default function About() {
  return (
    <div id="about-page">
      <div>
        <h1>About Me</h1>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce ac augue eu velit dictum scelerisque non vitae nisl.
          Integer molestie pulvinar varius.`}
        </p>
        <div>
          <img src={AboutPhoto} alt="Gabe with the Valley of Fire in the background." />
          <div>
            <h2>Gabriel Eaton</h2>
            <h3>Implementation & Data Solutions Engineer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
