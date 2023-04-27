import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
const TopRated = () => {

    const [TopRated,setTopRated]=useState([]);
    const GetAllTopRated= async ()=>{
         const {data}=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US&page=1`);
         console.log(data.results);
         setTopRated(data.results);
    }
    useEffect(()=>{
       GetAllTopRated();
    },[])
  return (
    <Fragment>
        <Navbar/>
        <div className='TopRated_Section-Container'>
             {TopRated?(
                 TopRated.map((m)=>(
                    <div key={m.id} className='TopRated_Section-Cards'>
                    <div className='TopRated_Section-Poster'>
                    <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" />
                    </div>
                    <div className='TopRated_Section-title'>
                        <h3>{m.original_title}</h3>
                    </div>
                    <div className='TopRated_Section-Released-details'>
                        <h3>{m.release_date}</h3>
                        <Link href={`/movie/TopRated/${m.id}`}className='links'>details</Link>
                    </div>
                  </div>
                 ))
             ):"loading"}    
        </div>
    </Fragment>
  )
}

export default TopRated;