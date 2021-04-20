import React, { FC, useState } from 'react'
import classes from './MenuItemDropdown.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { type } from 'os'
import { ClassExpression } from 'typescript'

const MenuItemDropdown = ({ data }: any) => {
  const { icon, path, title } = data
  const [active, setActive] = useState('not')

  return (
    <button
      className={`${classes.MenuItemDropdown} ${active}`}
      type="button"
      onClick={() =>
        setActive(() => {
          return classes.active
          // if (activeClass) return 'not'
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
