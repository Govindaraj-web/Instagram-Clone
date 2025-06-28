import React, { useEffect, useState } from 'react'
import {posts} from './data/data';

function Posts() {

  return (
    <div className='d-flex justify-content-center '>
      {posts.length > 0 ? (
        <div > 
            {posts.map((post)=>(
                <div className='my-3 border-bottom' key={post.id}>
                    <div className='d-flex'>
                      <img className='dp rounded-circle ' src={post.user.profile_pic} alt="Profile_pic" />
                      <h5 className=''>{post.user.username}</h5>
                    </div>
                      <img className='image' src={post.image} alt="post_image" />
                      <div>
                          <i className="bi bi-heart"></i>
                          <i className="bi bi-chat"></i>
                          <i className="bi bi-send"></i>
                      </div>
                      <div>
                        <b>{post.likes}Likes</b>
                      </div>
                      <p>{post.caption}</p>
                    </div>
            ))}
        </div>
      ):(
        <div>
            Loading posts...
            </div>
      )
    }
    </div>
  )
}

export default Posts
