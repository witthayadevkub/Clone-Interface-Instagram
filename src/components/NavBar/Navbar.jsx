import React from 'react'
import './Navbar.css'

//icons
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="" />

        <div className="iconBar">
            <i><CgAddR /></i>
            <i><FaRegHeart /></i>
            
        </div>
    </div>
  )
}

export default Navbar