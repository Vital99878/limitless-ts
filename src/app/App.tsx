import React, { FC } from 'react'
import Header from '../components/Header/Header'
import Logo from '../components/Logo/Logo'
import Sidebar from '../components/Sidebar'
import classes from './App.module.scss'

const App: FC = (): JSX.Element => {
  return (
    <div className={classes.app}>
      <Header />
      <Logo />
      <Sidebar />
    </div>
  )
}

export default App
