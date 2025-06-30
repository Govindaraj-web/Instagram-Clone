import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import Headermo from './Headermo'
import Footermo from './Footermo'


function Feed() {
  return (
    <div>
       <div><Headermo /></div>
      <div><Stories /></div>
      <div><Posts /></div>
      <div><Footermo /></div>
  
    </div>
  )
}

export default Feed
