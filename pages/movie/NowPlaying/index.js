import Navbar from '@/components/Navbar'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
const index = () => {
  const [nowPlaying,setNowPlaying]=useState([]);
  const GetsNowPlayingData=async ()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1`);
      console.log(data.results);
      setNowPlaying(data.results);
  }
  useEffect(()=>{
    GetsNowPlayingData();
  },[])
  return (
    <Fragment>
      <Navbar/>
      <div className='nowPlaying-container'>
        {nowPlaying?( nowPlaying.map((m)=>(
            <div key={m.id} className='nowPlaying-Card-section'>
            <div className='nowPlaying_Card-poster'>
            <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" />
            </div>
            <div className='nowPlaying_Card-title'>
                <h3>{m.original_title}</h3>
            </div>
            <div className='nowPlaying_Card-release-date_details'>
                <h3>{m.release_date}</h3>
                <Link href={`/movie/NowPlaying/${m.id}`} className='links'>details</Link>
            </div>
          </div>
        ))   
        ):"loading"} 
        
      </div>
    </Fragment>
  )
}

export default index