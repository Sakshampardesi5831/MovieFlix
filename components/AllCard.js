import React, { Fragment, useState } from 'react'
import Link from 'next/link';
const AllCard = (props) => {
   console.log(props); 
  return (
    <Fragment>
   <div className='AllCard_Container'>
   {props.tvshows.results?
       props.tvshows.results.map((u)=>(
        <div key={u.id} className='AllCard_Container-Card'>
           <Link className='AllCard_Links' href={`/tv/${u.id}`} >
              <div className='AllCard_Container-Card_img'>
                  <img src={`https://image.tmdb.org/t/p/w500/${u.poster_path}`} alt="" />
              </div>
              <div className='AllCard_Container-Card-title'>
                    <h3>{u.name}</h3>
              </div>
           </Link>
        </div>
       ))
    :"loading"}
   </div>
   
    </Fragment>
  )
}

export default AllCard