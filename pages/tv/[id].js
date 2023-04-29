import CardDetail from '@/components/CardDetail'
import Navbar from '@/components/Navbar'
import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
const TvShows = () => {
  let route=useRouter();
  const{id}=route.query;
  const [TvDetails,setTvDetails]=useState(null);
  const GetTvDetails=async ()=>{
      const {data}=  await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US`);
      console.log(data);
      setTvDetails(data);
  }
  useEffect(()=>{
    GetTvDetails();
  },[])
  return (
     <Fragment>
      <Navbar/>
      <CardDetail detailMovies={TvDetails} setMovies={setTvDetails}/>
     </Fragment>
  )
}

export default TvShows