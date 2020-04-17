import React from 'react'

import Container from '@material-ui/core/Container'
import './App.css'

import AddArtist from './components/forms/AddArtist'
import Artists from './components/lists/Artists'
import Title from './components/layout/Title'

const App = () => (
  
    <Container className='App'>
      <Title />
      <AddArtist />
      <Artists />
    </Container>
)

export default App
