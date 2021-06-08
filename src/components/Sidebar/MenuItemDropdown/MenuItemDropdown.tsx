import React, { FC, useState } from 'react'
import classes from './MenuItemDropdown.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { MenuItemDropdownProps } from '../../../types/bookProps'

const MenuItemDropdown = ({ icon, title, innerList }: MenuItemDropdownProps): JSX.Element => {
  const [active, setActive] = useState('')
  const [opened, setOpened] = useState('')

  const useOpened = () => {
    setActive((active) => {
      if (!active) return classes.MenuItemDropdown__active
      if (active) return ''
      return 'this state never return!'
    })
    setOpened((active) => {
      if (!active) return classes.subItem__opened
      if (active) return ''
      return 'this state never return!'
    })
  }

  const submenu = innerList.map((list, index) => {
    const submenu = list.map((item) => (
      <li key={item.title}>
        <a>{item.title}</a>
      </li>
    ))
    if (innerList.length != index + 1) {
      submenu.push(<li className={classes.divider}></li>)
    }
    return submenu
  })

  return (
    <>
      <button className={`${classes.MenuItemDropdown} ${active}`} type="button" onClick={() => useOpened()}>
        {icon}
        {title}
        <FontAwesomeIcon icon={faChevronRight} size="1x" />
        <FontAwesomeIcon icon={faChevronDown} size="1x" />
      </button>
      <ul className={`${classes.subItem} ${opened}`}>{submenu}</ul>
    </>
  )
}

export default MenuItemDropdown
