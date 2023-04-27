import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Navbar from '@/components/Navbar';
const UpcomingMovies = () => {
  const [upComing,setUpComing]=useState([]);
  const GetUpComingMovies= async ()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1`);
      console.log(data.results);
      setUpComing(data.results);
  }
  useEffect(()=>{
      GetUpComingMovies();
  },[])
  return (
    <Fragment>
      <Navbar/>
      <div className='UpComing_Movies-Container'>
        {upComing ? upComing.map((u)=>(
          <div key={u.id} className='UpComing_Movies-Cards'>
          <div className='UpComing_Movies-Poster'>
          <img src={`https://image.tmdb.org/t/p/w500/${u.poster_path}`} alt="" />
          </div>
          <div className='UpComing_Movie-title'>
             <h3>{u.original_title}</h3>
          </div>
          <div className='UpComing_Movie-release-date-section'>
             <h3>{u.release_date}</h3>
             <Link href={`/movie/UpComing/${u.id}`} className='links'>details</Link>
          </div>
          </div>
        ))  :"loading"}   
      </div>
    </Fragment>
  )
}

export default UpcomingMovies