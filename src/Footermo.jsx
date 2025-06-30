import React from 'react'
import {profile} from './data/data';

function Footermo() {
   const user = profile[0];
  return (
    <div className='footermo d-flex d-md-none '>
         <div><i className="bi bi-house-door"></i></div>
            <div><i className="bi bi-search"></i></div>
            <div><i className="bi bi-plus-square"></i></div>
            <div><i className="bi bi-play-btn"></i></div>
            <img className='prof dp rounded-circle' src={user.profile_pic} alt="Profile_pic" />

    </div>
  )
}

export default Footermo