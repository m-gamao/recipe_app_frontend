import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="homepage_pic">
                <img src='/assets/images/homepage_pic.jpeg' alt="homepage_pic" /> 
            </div> 

            {/* <button className="log-in-btn">Sign into My Account</button>  */}
        
            <h5>
            <Link to="/recipes"><button className="btn rec" onClick={null}>Find a Recipe</button> </Link>
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
