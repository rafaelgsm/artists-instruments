import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { v4 as uuidv4 } from 'uuid'

import { ADD_ARTIST, GET_ARTISTS } from '../../queries/index'

const AddArtist = () => {

  const [id] = useState(uuidv4())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [addArtist] = useMutation(ADD_ARTIST, {
  
    update(cache, { data: { addArtist } }) {
      const { artists } = cache.readQuery({ query: GET_ARTISTS })
      cache.writeQuery({
        query: GET_ARTISTS,
        data: { artists: artists.concat([addArtist]) }
      })
    }

  })


  return (
    <form
    
    onSubmit={e => {
        e.preventDefault()
        addArtist({
          variables: {
            id,
            firstName,
            lastName
          },
          optimisticResponse: {
            __typename: 'Mutuation',
            addArtist: {
              __typename: 'Artist',
              id,
              firstName,
              lastName
            }
          },
          update: (cache, { data: { addArtist } }) => {
            const data = cache.readQuery({ query: GET_ARTISTS })
            cache.writeQuery({
              query: GET_ARTISTS,
              data: {
                ...data,
                artists: [...data.artists, addArtist]
              }
            })
          }
        })
      }}
    
    >
      <TextField
        label='First Name'
        placeholder='i.e. John'
        margin='normal'
        variant='outlined'
        onChange={e => setFirstName(e.target.value)}
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        placeholder='i.e. Smith'
        margin='normal'
        variant='outlined'
        onChange={e => setLastName(e.target.value)}
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Artist
      </Button>
    </form>
  )
}

export default AddArtist
