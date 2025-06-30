import React from 'react'
import { useNavigate } from 'react-router-dom'
import {stories} from './data/data';
import {profile} from './data/data';

function Stories() {

const navigate = useNavigate()

const user = profile[0];

let tot = 0;

  return (
    <div className='story d-flex ms-5 mt-2'>
      <div className='d-none'>
      {tot=stories.length}
      </div>

      <div className='storydpm d-flex flex-column d-md-none mb-4 '>
      <img className='storydp prof dp rounded-circle' src={user.profile_pic} alt="Profile_pic" />
      <span>+</span>
      <p  style={{width:"70px"}}>Your Stroy</p>
         </div>
    

      {stories.length> 0 ? (
        stories.map((story)=>(
          <div key={story.id} className='mx-1' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='gardient-border'>
            <img src={story.user.profile_pic} alt="dp" className='story-dp rounded-circle ' />
            </div>

            
            <p className='text-truncate' style={{width:"80px"}}>{story.user.username}</p>
          </div>
          
        ))
        

      ):(
        <p>Loading</p>
      )}
     

    </div>


  )}


export default Stories
