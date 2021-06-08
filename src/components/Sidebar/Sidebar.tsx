import React, { FC, useState } from 'react'
import classes from './Sidebar.module.scss'
import MenuItem from './MenuItem'
import MenuItemDropdown from './MenuItemDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAd, faHome, faClipboard, faNeuter } from '@fortawesome/free-solid-svg-icons'
import User from '../User'

const Sidebar: FC = (): JSX.Element => {
  // get button, buttot with dropDown
  // need find title, key
  const activeItemData = [
    {
      title: 'Main',
      active: [false, false, [false, false, false, false, false, false], [false, false, false, false, false, false]],
    },
    {
      title: 'Other',
      active: [false],
    },
  ]

  const [activeMenu, setActiveMenu] = useState(activeItemData)

  const menusData = [
    {
      title: 'Main',
      items: [
        <MenuItem
          path="path"
          title="Fist item"
          active={activeMenu[0].active[0]}
          icon={<FontAwesomeIcon icon={faHome} size="1x" />}
          key={0}
        />,
        <MenuItem
          path="path"
          title="Second item"
          active={activeMenu[0].active[1]}
          icon={<FontAwesomeIcon icon={faNeuter} size="1x" />}
          key={1}
        />,
        <MenuItemDropdown
          key={2}
          title="Menu dropdown"
          icon={<FontAwesomeIcon icon={faAd} size="1x" />}
          innerList={[
            [
              { title: 'first el', active: false },
              { title: 'second el', active: false },
              { title: 'Default layout 1', active: false },
              { title: 'Default layout 2', active: false },
              { title: 'Default layout 3', active: false },
              { title: 'Default layout 4', active: false },
            ],
            [
              { title: 'first el', active: false },
              { title: 'second el', active: false },
              { title: 'Default layout 1', active: false },
              { title: 'Default layout 2', active: false },
              { title: 'Default layout 3', active: false },
              { title: 'Default layout 4', active: false },
            ],
          ]}
        />,
        <MenuItemDropdown
          key={3}
          title="Layouts"
          icon={<FontAwesomeIcon icon={faCoffee} size="1x" />}
          innerList={[
            [
              { title: 'first el', active: true },
              { title: 'second el', active: false },
              { title: 'Default layout 1', active: false },
              { title: 'Default layout 2', active: false },
              { title: 'Default layout 3', active: false },
              { title: 'Default layout 4', active: false },
            ],
            [
              { title: 'first el', active: false },
              { title: 'second el', active: false },
              { title: 'Default layout 1', active: false },
              { title: 'Default layout 2', active: false },
              { title: 'Default layout 3', active: false },
              { title: 'Default layout 4', active: false },
            ],
          ]}
        />,
      ],
    },
    {
      title: 'Other',
      items: [
        <MenuItem
          path="path"
          title="Third item"
          active={false}
          icon={<FontAwesomeIcon icon={faClipboard} size="1x" />}
          key={4}
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
