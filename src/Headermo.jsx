import React from 'react'

function Headermo() {
    return (

        <div className="headermo d-flex d-md-none  ">
            <div className="lefth">
                <img className='logo-text' src="\assets\Instagramtext.png" alt="" />
                <select name="" id="">
                    <option value="">Following</option>
                    <option value="">Favourites</option>
                </select>
                </div>
                <div className="righth">
                    <div><i className="bi bi-heart"></i></div>
                    <div><i className="bi bi-send"></i></div>
                </div>

        </div>

    )
}

export default Headermo