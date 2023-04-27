import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Navbar from '@/components/Navbar';
import CardDetail from '@/components/CardDetail';
const UpcomingDetails = () => {
  const route=useRouter();
  const {id}=route.query;
  const [UpComingMovie,setUpcoming]=useState(null);
  const GetUpComingMovie=async ()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US`);
    console.log(data);
    setUpcoming(data);
  }
  useEffect(()=>{
      GetUpComingMovie();
  },[])
  return (
    <Fragment>
       <Navbar/>
       <CardDetail detailMovies={UpComingMovie} setMovies={setUpcoming}/>
    </Fragment>
  )
}

export default UpcomingDetails