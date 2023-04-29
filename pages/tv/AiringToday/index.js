import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Navbar from '@/components/Navbar';
import AllCard from '@/components/AllCard';
const AllTvShows = () => {
  const [onAiring,setOnAiring]=useState([]);
  const GetTvOnAiring= async ()=>{
     const {data}=await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1");
     console.log(data);
     setOnAiring(data);
  }
  useEffect(()=>{
    GetTvOnAiring();
  },[])
  return (
    <Fragment>
     <Navbar/>
     <AllCard tvshows={onAiring} setTvShows={setOnAiring} />
    </Fragment>
  )
}

export default AllTvShows