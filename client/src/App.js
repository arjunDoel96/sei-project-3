import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'
import Cats from './components/products/Cats.js'
import Dogs from './components/products/Dogs.js'
import ProductLogin from './components/products/ProductLogin.js'
import ProductNoLogin from './components/products/ProductNoLogin.js'
import Profile from './components/Profile.js'


const App = () => {

  

  
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/products/nologin" component={ProductNoLogin}/>
        <Route path="/products" component={ProductLogin}/>
        <Route path="/cats" component={Cats}/>
        <Route path="/dogs" component={Dogs}/>
        <Route path="/profile" component={Profile} /> 
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

