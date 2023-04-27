import React,{useState,useEffect,Fragment} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Navbar from '@/components/Navbar';
import CardDetail from '@/components/CardDetail';
const NowPlayingID = () => {
  const route=useRouter();
  const [NowPlayingDets,setNowPlaying]=useState(null);
  const {id}=route.query;
  const GetNowPlayingDetails=async ()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a0b808376d69ce4b9dc5f1978206bae2&language=en-US`)
    console.log(data);
    setNowPlaying(data);
  }
  useEffect(()=>{
     GetNowPlayingDetails();
  },[])
  console.log(NowPlayingDets);
  return (
    <Fragment>
      <Navbar/>
       <CardDetail detailMovies={NowPlayingDets} setMovies={setNowPlaying}/>
    </Fragment>
  )
}

export default NowPlayingID