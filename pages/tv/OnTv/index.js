import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '@/components/Navbar';
import AllCard from '@/components/AllCard';
const OnTv = () => {
  const [onTV,setOnTv]=useState([]);

  const GetOnTvData=async ()=>{
    const {data}=await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1");
    console.log(data);
    setOnTv(data);
  }
  useEffect(()=>{
    GetOnTvData();
  },[])
  return (
    <Fragment>
     <Navbar/>
     <AllCard tvshows={onTV} setTvShows={setOnTv} />
    </Fragment>
  )
}

export default OnTv