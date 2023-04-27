import Navbar from '@/components/Navbar'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
const index = () => {
  const [movies,setmovies]=useState([]);
  const GetPopularMovies= async ()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1`)
    console.log(data);
    setmovies(data.results);
  }
 useEffect(()=>{
    GetPopularMovies()
 },[]);
  return (
    <Fragment>
        <Navbar/>
        <div className='popular_section'>
          {movies ?(
            movies.map((m)=>(
              <div key={m.id} className='popular_section-cards'>
              <div className='popular_section_poster'>
                  <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" />
              </div>
              <div className='popular_section_movie-title'>
                   <h2>{m.original_title}</h2>
              </div>
              <div className='popular_section_release-date_and_details'>
                  <h3>{m.release_date}</h3>
                  <Link className='mylinks' href={`/movie/${m.id}`}>details</Link>
              </div>
             </div>
            ))
          ):"loading"}
        </div>
    </Fragment>
  )
}

export default index