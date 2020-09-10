// App.js:
import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import RecipeSearch from ''
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
        <button className="btn rec" onClick="">Find a Recipe</button> 
        <button className="btn fav">My Favorite Recipes</button>
        </h5>
          {/* <button id='getData' onclick="GetData()">Get Data</button> */}
      <div className="box1">

       <div className="content"> 
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');
          </style>                  
          <h2>The Recipe Nook!</h2>
       </div>
      </div>

      <div className="box2">
        {/* this is the text overlay */}
        <h1>The Recipe Nook!</h1>
      </div>
      </div>
  );
};



export default App;
    
