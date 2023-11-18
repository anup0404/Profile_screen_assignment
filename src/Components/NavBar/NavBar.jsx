import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <>
    <div className='nav_container'>
        <div className="nav_left">
    <img src="https://www.terriblytinytales.com/TTT%20-%20974%20x%20513.png" alt="this is logo" />
    <h1>|</h1>
    <p>STORIES</p>
        </div>
        <div className="nav_right">
            <div className="course">
                Courses
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar