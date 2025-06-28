import React from 'react'
import {profile, suggestions} from './data/data';

function Suggestion() {

  const user = profile[0];

  return (
    <div>
      <div className='suggestions w-75 m-4' >
      {user ?
          <div className='d-flex mt-4' >
              <img className='prof dp rounded-circle' src={user.profile_pic} alt="Profile_pic" />
              <div className="container ">
              <h5 className='row'>{user.username}</h5>
              <h6 className='row '>{user.comment}</h6>
              </div> 
              <small className='ms-auto text-primary'>Switch</small>
            </div>
            : <p>Loading...</p>}

            <div className=' d-flex mt-4'>
              <p className='text-secondary '>Suggested for you</p>
              <b className='see-all ms-auto'>See All</b>
            </div>

            {suggestions.length > 0 ? (
        <div> 
            {suggestions.map((suggestion)=>(
                <div  key={suggestion.id}>

                    <div className='d-flex'>
                      <img className='sug dp rounded-circle' src={suggestion.profile_pic} alt="Profile_pic" />
                        <div className=" container">
                      <h5 className='row'>{suggestion.username}</h5> 
                      <h6 className='row '>{suggestion.comment}</h6> 
                        </div>
                      <p className="text-primary ms-auto">Follow</p>
                    </div>

                    </div>
            ))}
        </div>
      ):(
        <div>
            Loading..
            </div>
      )
    }
    </div>
    </div>
  )
}

export default Suggestion
