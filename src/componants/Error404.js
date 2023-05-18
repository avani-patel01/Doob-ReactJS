import React from 'react'
import { Link } from 'react-router-dom'

function Error404(props) {
  return (
    <div className={`${props.isDarkMode ? 'light_mode' : 'dark_mode'} mt-100`}>
         <div className="d-flex flex-column align-items-center justify-content-center vh-100 ">
            <h1 className={`display-1 fw-bold ${props.isDarkMode ? 'text-black' : 'text-light'}`}>404</h1>
            <p className={`${props.isDarkMode ? 'text-dak' : 'text-white'}`}>Page Not Found</p>
            <Link to="/" className={`px-5 text-decoration-none`}><button className="btn-clr text-white">HOME <span className="material-symbols-outlined">double_arrow</span></button></Link>
        </div>
    </div>
  )
}

export default Error404