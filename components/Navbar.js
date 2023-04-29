import React, { Fragment, useState } from 'react'
import Link from 'next/link';
const Navbar = () => {
  const [isHovering,setIshovering]=useState(false);
  const[isTvHovering,setIsTvHovering]=useState(false);
  const handleMouseOver=()=>{
    setIshovering(true);
  }
  const handleMouseOut=()=>{
     setIshovering(false);
  }
  const handleTvHover=()=>{
    setIsTvHovering(true);
  }
  const handleTvMouseOut=()=>{
    setIsTvHovering(false);
  }
  return (
    <Fragment>
      <div className='Navbar-Container'>
           <div className='Logo'>
               <h1 className='Logo_text'>
                  TMDB
               </h1>&nbsp;
               <div className='Logo_rect'></div> &nbsp;
               <div className='navigation-links'>
                   <div className='moviesLink' onMouseOver={handleMouseOver}>
                   <Link href="/movie" className='links'>Movies</Link>
                   </div>
                   <div className='moviesLink' onMouseOver={handleTvHover} >
                   <Link href="/tv" className='links'>Tv Shows</Link>
                   </div>
                   <div className='moviesLink'>
                   <Link href="/" className='links'>People</Link>
                   </div>
                   <div className='moviesLink'>
                   <Link href="/" className='links'>Others</Link>
                   </div> 
               </div>
           </div>
           <div className='other-section'>
               <div className='icons'><i className="ri-add-line"></i></div>
               <div className='icons'><i className="ri-notification-3-line"></i></div>
               <div className='icons'><i className="ri-search-line"></i></div>
               <div className='icons'><i className="ri-facebook-line"></i></div>
               <div className='icons'><i className="ri-instagram-line"></i></div>
           </div>
           {isHovering && (
             <div className='other-navigation'>
                <div className='close' onClick={handleMouseOut} ><i className="ri-close-fill"></i></div>
                <div className='nav-link-1'><Link className='link' href="/movie">Popular</Link></div>
                <div className='nav-link-2'><Link className='link' href="/movie/NowPlaying">Now Playing</Link></div>
                <div className='nav-link-3'><Link className='link' href="/movie/UpComing">UpComing</Link></div>
                <div className='nav-link-4'><Link className='link' href="/movie/TopRated">Top rated</Link></div>
             </div>
           )}
           {isTvHovering&& (
              <div className='tvSubNavigation'>
              <div className='close' onClick={handleTvMouseOut} ><i className="ri-close-fill"></i></div>
                   <div className='nav-link-1'><Link className='link' href="/tv">Popular</Link></div>
                   <div className='nav-link-2'><Link className='link' href="/tv/AiringToday">Airing Today</Link></div>
                   <div className='nav-link-3'><Link className='link' href="/tv/OnTv">On Tv</Link></div>
                   <div className='nav-link-4'><Link className='link' href="/tv/TopRated">Top rated</Link></div>
              </div>
           )}
           
        </div>
    </Fragment>
  )
}

export default Navbar;