import React from 'react'
import './Home.css';
// import { Link } from 'react-router-dom'
import SearchField from './SearchField'

const Home = () => {
    return (
        <div>
            <div className="homepage_pic">
                <img src='/assets/images/homepage_pic.jpeg' alt="homepage_pic" /> 
            </div> 

            {/* <button className="log-in-btn">Sign into My Account</button>  */}
        
            <h5>
            <button className="btn rec" onClick={SearchField}>Find a Recipe</button> 
            <button className="btn create">See My Favorites</button>
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
    )
}

export default Home
