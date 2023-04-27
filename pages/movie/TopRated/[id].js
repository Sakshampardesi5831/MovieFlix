import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar';
import axios from 'axios';
import CardDetail from '@/components/CardDetail';
const TopRatedDetails = () => {
   const route=useRouter();
   const{id}=route.query;
   const [TopRated,setTopRated]=useState(null);
   const GetTopRatedDetails= async ()=>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US`);
        console.log(data);
        setTopRated(data);
   }
   useEffect(()=>{
     GetTopRatedDetails();
   },[])
  return (
    <Fragment>
      <Navbar/>
      <CardDetail detailMovies={TopRated} setMovies={setTopRated}/>
    </Fragment>
  )
}

export default TopRatedDetails