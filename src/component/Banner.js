import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../instance';
import './Banner.css'

function Banner({ fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const base_url = 'https://image.tmdb.org/t/p/original';
  
    async function getData() {
      try {
        const result = await instance.get(fetchUrl);
        const resultsArray = result?.data?.results;
  
        if (Array.isArray(resultsArray) && resultsArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * resultsArray.length);
          setMovies(resultsArray[randomIndex]);
        } else {
          console.error('Invalid data format or empty results array:', resultsArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      getData();
    }, [fetchUrl]);
  
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + '.....' : str;
    }
  
    return (
      <div
        className="banner"
        style={{
          backgroundImage: `url(${base_url}${movies?.backdrop_path || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bannerContent">
          <h1 className="title">{movies?.original_name}</h1>
          <p className="desc">{truncate(movies?.overview, 150)}</p>
        </div>
      </div>
    );
  }
  
  export default Banner;
  