import React, { useEffect, useState } from 'react'
import instance from '../instance';
import "./Row.css";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    async function fetchMovies() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results);
    }
    console.log(movies);
    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <div className='row'>
            <h2>
                {title}
            </h2>
            <div className='movies_row'>
                {
                    movies.map((movie)=>(
                        <img className='movieposter' src={`${base_url}${movie.backdrop_path} `}
                        alt={movie.name}/>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default Row;