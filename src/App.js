import React from 'react'
import {} from 'react-router'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home/Home'
import "./App.css"
import AddRestaurant from './pages/add-restaurant/AddRestaurant'
import InnerPage from './pages/inner-page/InnerPage'

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/home:id" exact component={InnerPage} />
      <Route path="/admin" exact component={AddRestaurant} />
      <Redirect to="/home" />
    </Switch>
</Router>
  )
}

export default App
