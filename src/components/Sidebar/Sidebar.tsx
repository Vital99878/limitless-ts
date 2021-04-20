import React, { FC } from 'react'
import classes from './Sidebar.module.scss'
import MenuItem from './MenuItem'
import MenuItemDropdown from './MenuItemDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faAd,
  faHome,
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import User from '../User'

const Sidebar: FC = (): JSX.Element => {
  // get button, buttot with dropDown
  const menusData = [
    {
      title: 'Main',
      items: [
        <MenuItem
          data={{
            path: 'path',
            title: 'Fist item',
            icon: <FontAwesomeIcon icon={faHome} size="1x" />,
          }}
          key={3}
        />,
        <MenuItem
          data={{
            path: 'path',
            title: 'Main',
            icon: <FontAwesomeIcon icon={faAd} size="1x" />,
          }}
          key={3}
        />,
        <MenuItemDropdown
          data={{
            path: 'path',
            title: 'Layouts',
            icon: <FontAwesomeIcon icon={faCoffee} size="1x" />,
          }}
          key={3}
        />,
      ],
    },
    {
      title: 'Second menu',
      items: [
        <MenuItem
          data={{
            path: 'path',
            title: 'Fist item',
            icon: <FontAwesomeIcon icon={faHome} size="1x" />,
          }}
          key={3}
        />,
        <MenuItem
          data={{
            path: 'path',
            title: 'Main',
            icon: <FontAwesomeIcon icon={faAd} size="1x" />,
          }}
          key={3}
        />,
        <MenuItemDropdown
          data={{
            path: 'path',
            title: 'Layouts',
            icon: <FontAwesomeIcon icon={faCoffee} size="1x" />,
          }}
          key={3}
        />,
      ],
    },
  ]
  const menus = menusData.map((menu) => {
    return (
      <>
        <div className={classes.menuTitle}>{menu.title}</div>
        {menu.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </>
    )
  })

  return (
    <nav className={classes.sidebar}>
      <User />
      <ul>{menus}</ul>
    </nav>
  )
}

export default Sidebar
