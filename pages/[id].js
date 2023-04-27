import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import CardDetail from '@/components/CardDetail';
const DefaultDetail = () => {
    let route=useRouter();
    const {id}=route.query;
    const [details,setDetails]=useState(null);
    const GetDetails=async ()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US`);
        console.log(data);
        setDetails(data);
    }
    useEffect(()=>{
      GetDetails();
    },[]);
  return (
    <Fragment>
      <Navbar/>
      <CardDetail detailMovies={details} setMovies={setDetails}/>
    </Fragment>
  )
}

export default DefaultDetail;