// App.js:
import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import vid1 from './assets/videos/video-salt.mp4'
// import vid2 from './assets/videos/video-chop.mp4'
// import vid3 from './assets/videos/video-wok.mp4'
// import withAutoplay from 'react-awesome-slider/dist/autoplay' 

// const AutoplaySlider = withAutoplay(AwesomeSlider)

function App() {
  return (
        <div>
        <div className="homepage_pic">
        <img src='/assets/images/homepage_pic.jpeg' alt="homepage_pic" /> 
        </div> 

        <button className="log-in-btn">Sign into My Account</button> 
      
        <h5>
        <button class="btn rec">Find a Recipe</button> 
        <button class="btn fav">My Favorite Recipes</button>
        </h5>
      
      <div className="box">

       <div className="content"> 
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');
          </style>                  
          <h1>The Recipe Nook!</h1>
       </div>
      </div>
      </div>
  );
};

export default App;
    
