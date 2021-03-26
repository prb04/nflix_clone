/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css";


const baseURL =  "https://image.tmdb.org/t/p/original/";

function Row (props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchdata(){
            const req = await axios.get(props.fetchURL);
            setMovies(req.data.results);
            return req
        }
            
        fetchdata();

    }, [props.fetchURL]);   


    return(
        <div className="row" >
            <h2>{props.title}</h2>

            <div className="row-poster">
                {movies.map((x)=> 
                    (
                        <img
                            key = {x.id} 
                            className={`row-posters ${props.islargerow && "rowposterlarge"}`} 
                            src={`${baseURL}${props.islargerow?x.poster_path:x.backdrop_path}`} 
                            alt = {x.name} />
                    )
                )}

            </div>
        </div>
    )
}

export default Row;



    











