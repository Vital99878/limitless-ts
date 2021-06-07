import React, { useState, FC } from 'react'
import classes from './MenuItem.module.scss'
import { MenuItemProps } from '../../../types/bookProps'

const MenuItem = ({ icon, title, active, path }: MenuItemProps): JSX.Element => {
  const menuItemActive = active ? classes.menuItem__active : ''

  return (
    <button
      className={`${classes.menuItem} ${menuItemActive}`}
      type="button"
      onClick={() => {
        console.log(path)
      }}
    >
      {icon}
      {title}
    </button>
  )
}

export default MenuItem
