import React, { FC, useState } from 'react'
import classes from './MenuItemDropdown.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { MenuItemDropdownProps } from '../../../types/bookProps'

const MenuItemDropdown = ({ icon, title, innerList }: MenuItemDropdownProps) => {
  const [active, setActive] = useState('')
  const arrow = 'arrow'

  return (
    <button
      className={`${classes.MenuItemDropdown} ${active}`}
      type="button"
      onClick={() =>
        setActive((active) => {
          if (!active) return classes.MenuItemDropdown__active
          if (active) return ''
          return 'this state never return!'
        })
      }
    >
      {icon}
      {title}
      <FontAwesomeIcon icon={faChevronRight} size="1x" />
      <FontAwesomeIcon icon={faChevronDown} size="1x" />
    </button>
  )
}

export default MenuItemDropdown
