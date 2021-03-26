/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";


function Banner(){
    const [movies,setMovies] = useState([]);
  
    useEffect(() => {
        async function fetchdata(){
            const req = await axios.get(requests.fetchTrending);
            setMovies(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length - 1)
                ]
            );
            return req;
        }
        fetchdata();
    }, []);

    console.log(movies);
    
    return(
        <header 
            className = "banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner-contents">
                <h1>{movies?.title}</h1>
                <div className="banner-btns">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My list</button>
                </div>
                {/* description */}
            </div>
        </header>
    );

}

export default Banner;