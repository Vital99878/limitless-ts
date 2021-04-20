import React, { useState } from 'react'
import classes from './MenuItem.module.scss'

const MenuItem =({data}) =>{
  const { icon, content, title } = data
  const [active, setActive] = useState(classes.DropdownButton)

  return (
    <button
      className={classes.MenuItem}
      type="button"
      onClick={() => {
        setShow((show) => !show)
        setActive((activeState) => {
          if (activeState === classes.DropdownButton) return classes.isActive
          return classes.DropdownButton
        })
      }}
    >
      {icon}
      {title}
    </button>
  )
}

export default MenuItem
