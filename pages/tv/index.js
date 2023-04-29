import Navbar from '@/components/Navbar'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import AllCard from '@/components/AllCard';

const index = () => {
  const [TvShows,setTvShows]=useState([]);
  const GetTvShows= async ()=>{
       const {data}=await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1");
       console.log(data);
       setTvShows(data);
  }
  useEffect(()=>{
    GetTvShows();
  },[])
  return (
   <Fragment>
    <Navbar/>
     <AllCard tvshows={TvShows} setTvShows={setTvShows} />
   </Fragment>
  )
}

export default index