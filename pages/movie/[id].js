import React, { Fragment, useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar';
import axios from 'axios';
import CardDetail from '@/components/CardDetail';
const MovieDetails = () => {
    const route=useRouter();
    const {id}=route.query;
    const [popular,setpopular]=useState(null);
    const GetMovieDetail =async ()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US`);
        console.log(data);
        setpopular(data);
    }
    useEffect(()=>{
      GetMovieDetail();
    },[]);
    console.log(popular);
  return (
     <Fragment>
        <Navbar/> 
        <CardDetail detailMovies={popular} setMovies={setpopular}/>
     </Fragment>
  )
}

export default MovieDetails