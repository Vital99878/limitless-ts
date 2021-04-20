import React from 'react'
import classes from './Footer.module.scss'
import {
  faGlobe,
  faHome,
  faHandPaper,
  faPrint,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  const by = 'by '
  return (
    <footer className={classes.footer}>
      <span className="navbar-text">
        © 2015 - 2018. <a href="#">Limitless Web App Kit</a> {by}
        <a href="http://themeforest.net/user/Kopyov">Eugene Kopyov</a>
      </span>
      <ul className={classes.right}>
        <li>
          <a href="#">
            <FontAwesomeIcon
              className={classes.chevronDown}
              size="1x"
              icon={faGlobe}
            />
            Support
          </a>
        </li>
        <li>
          <a href="#">
            {' '}
            <FontAwesomeIcon
              className={classes.chevronDown}
              size="1x"
              icon={faHandPaper}
            />
            Docs
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              className={classes.chevronDown}
              size="1x"
              icon={faPrint}
            />
            Purchase
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
