import React from 'react'
import classes from './Logo.module.scss'
import logo from '../../img/logo_light.png'

function Logo() {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="Logo" />
      <div className={classes.logoName}>Limitless</div>
    </div>
  )
}

export default Logo
