import React, { FC } from 'react'
import classes from './Logo.module.scss'
import logo from '../../img/logo_light.png'
import Header from '../Header'

const Logo: FC = (): JSX.Element => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="Logo" />
      <div className={classes.logoName}>Limitless</div>
    </div>
  )
}

export default Logo
