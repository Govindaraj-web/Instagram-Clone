import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  return (
    
    <div className='m-4 position-fixed border-end pe-5'>
      <div className='d-flex flex-column gap-3 pe-5'>
            <img className='logo-text' src="\assets\Instagramtext.png" alt="Logo" />
            <div><i className="bi bi-house-door"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-send"></i>messages</div>
            <div><i className="bi bi-heart"></i>Notifcations</div>
            <div><i className="bi bi-plus-square"></i>Create</div>
            <div onClick={()=> {navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
            <div><i className="bi bi-opencollective"></i>Meta AI</div>
            <div><i className="bi bi-dice-4"></i>AI Studio</div>
            <div><i className="bi bi-threads"></i>Threads</div>
      </div>

      
    
    </div>
  )
}

export default Sidebar
