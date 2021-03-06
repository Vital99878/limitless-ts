import React, { FC } from 'react'
import classes from './User.module.scss'
import defaultAva from '../../img/defaultAvatar.png'
import { faFolderMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User: FC = (): JSX.Element => {
  return (
    <div className={classes.user}>
      <img src={defaultAva} alt="Avatar" />
      <div className={classes.userName}>User name</div>
      <FontAwesomeIcon
        className={classes.chevronDown}
        onClick={() => console.log('hide menu func')}
        icon={faFolderMinus}
        size="sm"
      />
    </div>
  )
}

export default User
