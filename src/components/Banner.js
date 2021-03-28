/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
import "./banner.css"


function Banner(){
    const [movies,setMovies] = useState([]);
  
    useEffect(() => {
        async function fetchdata(){
            const req = await axios.get('https://api.themoviedb.org/3'+requests.fetchNetflixOriginals);
            setMovies(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length - 1)
                ]
            );
            console.log("req is",req);
            return req;
        }
        fetchdata();
    }, []);

    console.log(movies);

    
    function truncate(str,n) {
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}
    
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
                <h1 className="banner-title">{movies?.title || movies?.name || movies?.original_name}</h1>
                <div className="banner-btns">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My list</button>
                </div>

                <h1 className="banner-desc"> 
                    {truncate(movies?.overview,150)}
                </h1>
                {/* description */}
            </div>
            <div className="banner-fadeBottom" />
        </header>
    );

}

export default Banner;