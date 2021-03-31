/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL =  "https://image.tmdb.org/t/p/original/";

function Row (props) {
    const [movies, setMovies] = useState([]);
    const [trailerurl,setTrailerurl] = useState("");

    useEffect(() => {

        async function fetchdata(){
            const req = await axios.get(props.fetchURL);
            setMovies(req.data.results);
            return req
        }
            
        fetchdata();

    }, [props.fetchURL]);
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    function handleClick(movie){
        if(trailerurl){
            setTrailerurl('');
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                 const urlparams = new URLSearchParams(new URL(url).search)
                 setTrailerurl(urlparams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };
 



    return(
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row-poster">
                {movies.map((x)=> 
                    (
                        <img
                            key = {x.id} 
                            onClick={handleClick}
                            className={`row-posters ${props.islargerow && "rowposterlarge"}`} 
                            src={`${baseURL}${props.islargerow?x.poster_path:x.backdrop_path}`} 
                            alt = {x.name} />
                    )
                )}

            </div>
            {trailerurl && <Youtube videoid={trailerurl} opts = {opts} />}
        </div>
    )
}

export default Row;



    











