import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'


function Header() {
  return (
    <div className={style.headerContainer}>
      <NavBar />
      <Link className={style.link} to={'/'}><div className={style.logo}>New!</div></Link>
      <div className={style.logoContainer}>BEST IPSUM BET</div>
    </div>
  )
}

export default Header
