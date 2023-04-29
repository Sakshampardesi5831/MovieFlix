import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '@/components/Navbar';
import AllCard from '@/components/AllCard';
const TopRated = () => {
  const [tvTopRated,setTvTopRated]=useState([]);
  const GetTvTopRated= async ()=>{
     const {data}=await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1");
     console.log(data);
     setTvTopRated(data);
  }
  useEffect(()=>{
    GetTvTopRated();
  },[])
  return (
   <Fragment>
     <Navbar/>
     <AllCard tvshows={tvTopRated} setTvShows={setTvTopRated} />
   </Fragment>
  )
}

export default TopRated