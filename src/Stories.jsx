import React from 'react'
import { useNavigate } from 'react-router-dom'
import {stories} from './data/data';

function Stories() {

const navigate = useNavigate()

let tot = 0;

  return (
    <div className='story d-flex ms-5 mt-2'>
      <div className='d-none'>
      {tot=stories.length}
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
