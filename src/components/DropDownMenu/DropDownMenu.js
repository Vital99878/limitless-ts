import React, { useState } from 'react'
import classes from './DropDownMenu.module.scss'
import DropdownMenuButton from '../DropdownMenuButton'

function DropDownMenu({ data }) {
  const { blockTitle, buttonContent, menuElements } = data

  const [show, setShow] = useState(false)
  const menu = menuElements.map((item) => (
    <li key={item} className={classes.DropdownItem}>
      {item}
    </li>
  ))

  return (
    <div className={classes.DropdownBlock}>
      <div className={classes.DropdownTitle}>{blockTitle.toUpperCase()}</div>
      <DropdownMenuButton data={buttonContent} setShow={setShow} />
      {show && <ul className={classes.dropdownMenu}>{menu}</ul>}
    </div>
  )
}

export default DropDownMenu
