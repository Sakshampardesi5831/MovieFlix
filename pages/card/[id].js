import React, { Fragment, use, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Navbar from '@/components/Navbar';
import CardDetail from '@/components/CardDetail';
const cardId = () => {
let route =useRouter();
const {id}=route.query;
const [detailMovies,setMovies]=useState(null);
 const GetDetailCard= async ()=>{
   const {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US`)    
   console.log(data);
   setMovies(data);
 }
 useEffect(()=>{
   GetDetailCard();
 },[])
  return (
    <Fragment>
      <Navbar/>
      <CardDetail detailMovies={detailMovies} setMovies={setMovies} />
    </Fragment>
  )
}

export default cardId