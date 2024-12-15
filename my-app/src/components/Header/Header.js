import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div  className='header'>
        <div className="header-contents">
            <h2>
                Order your favorite food here
            </h2>
            <p>
            Discover delicious meals at your fingertips with our food delivery app, where local favorites and global cuisines are just a tap away. Enjoy fast, convenient service that brings the flavors of your favorite restaurants straight to your door.    
            </p>
            <button>
                View Menu
            </button>
        </div>
    </div>
  )
}

export default Header