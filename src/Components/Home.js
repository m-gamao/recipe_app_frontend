import React from 'react';
// import './Home.css';
import { Link } from 'react-router-dom'
import Search from '../Pages/SearchDisplay/containers/SearchContainer';

const Home = () => {
    return (
        <div>
            <div className="homepage_pic">
                <img src='/assets/images/homepage_pic.jpeg' alt="homepage_pic" /> 
            </div> 

        <h5>
            <Link to="/search">
                <button className="btn rec" type="button">
                    Find a Recipe!
                </button>
            </Link>
            <Link to="/favorites">
                <button className="btn create" type="button">
                    See My Favorites
                </button>
            </Link>
        </h5>
          
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

export default Home;
