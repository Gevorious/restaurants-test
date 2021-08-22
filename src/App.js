import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Home from './pages/home/Home'
import "./App.css"
import AddRestaurant from './pages/add-restaurant/AddRestaurant'
import InnerPage from './pages/inner-page/InnerPage'
import {AnimatePresence} from 'framer-motion'

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/home" exact component={Home} />
        <Route path="/home:id" exact component={InnerPage} />
        <Route path="/admin" exact component={AddRestaurant} />
        <Redirect to="/home" />
      </Switch>
    </AnimatePresence>
  )
}

export default App
