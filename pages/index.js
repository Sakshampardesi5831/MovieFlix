
import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Navbar from '@/components/Navbar'
const index = () => {
  const [movies,setmovies]=useState([]);
  const GetLatestMovies= async ()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1`)
    console.log(data);
    setmovies(data.results);
  }
  useEffect(()=>{
    GetLatestMovies();
  },[])
  return  (
        <Fragment>
     <div className='main-box'>
        <Navbar/>
        <div className='movies-section'>
          {movies && movies.map((m)=>(
             <div key={m.id} className='moviesCard-section'>
             <div className='card-images'>
                  <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" />
             </div>
             <div className='movies_title'>
               <h4 className='title'>{m.original_title}</h4>
             </div>
             <div className='movies_release_date'>
                <h5 className='r_date'>{m.release_date}</h5>
                <Link className='detail-link' href={`/${m.id}`}>details</Link>
             </div>
             </div>
          ))} 
        </div>
     </div>
    </Fragment>
    )
   
   
}

export default index