import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App'

import ArtistDetail from '../components/layout/ArtistDetail'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/artists/:id' component={ArtistDetail} />
    </Switch>
  </BrowserRouter>
)

export default Router
