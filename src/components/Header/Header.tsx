import React, { FC } from 'react'
import classes from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faComment, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import User from '../User'

const Header: FC = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <button className={classes.headerButton} type="button">
        <FontAwesomeIcon className={classes.fontIcon} icon={faArrowAltCircleDown} />
        <div className={classes.quantity}>6</div>
      </button>
      <div className={classes.online}>Online</div>
      <button className={classes.headerButton} type="button">
        <FontAwesomeIcon icon={faUserFriends} />
      </button>
      <button className={classes.headerButton} type="button">
        <FontAwesomeIcon icon={faComment} />
        <div className={classes.quantity}>6</div>
      </button>
      <User />
    </header>
  )
}

export default Header
