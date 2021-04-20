import React, { FC, useState } from 'react'
import classes from './DropDownMenu.module.scss'

function DropDownMenu({ data }: { data: any }) {
  const { blockTitle, buttonContent, menuElements } = data

  const [show, setShow] = useState(false)
  const menu = menuElements.map((item: any) => (
    <li key={item} className={classes.DropdownItem}>
      {item}
    </li>
  ))

  return (
    <div className={classes.DropdownBlock}>
      <div className={classes.DropdownTitle}>{blockTitle.toUpperCase()}</div>
      {show && <ul className={classes.dropdownMenu}>{menu}</ul>}
    </div>
  )
}

export default DropDownMenu
