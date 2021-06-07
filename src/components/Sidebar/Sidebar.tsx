import React, { FC } from 'react'
import classes from './Sidebar.module.scss'
import MenuItem from './MenuItem'
import MenuItemDropdown from './MenuItemDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAd, faHome, faClipboard } from '@fortawesome/free-solid-svg-icons'
import User from '../User'

const Sidebar: FC = (): JSX.Element => {
  // get button, buttot with dropDown
  const menusData = [
    {
      title: 'Main',
      items: [
        <MenuItem
          path="path"
          title="Fist item"
          active={true}
          icon={<FontAwesomeIcon icon={faHome} size="1x" />}
          key={3}
        />,
        <MenuItemDropdown
          title="Menu dropdown"
          icon={<FontAwesomeIcon icon={faAd} size="1x" />}
          innerList={['first el', 'second el']}
          key={2}
        />,
        <MenuItemDropdown
          title="Layouts"
          icon={<FontAwesomeIcon icon={faCoffee} size="1x" />}
          innerList={['first el', 'second el']}
          key={3}
        />,
      ],
    },
    {
      title: 'Second menu',
      items: [
        <MenuItem
          path="path"
          title="Second item"
          active={false}
          icon={<FontAwesomeIcon icon={faClipboard} size="1x" />}
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
