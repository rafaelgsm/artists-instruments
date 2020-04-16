import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { v4 as uuidv4 } from 'uuid'

import { ADD_CONTACT, GET_CONTACTS } from '../../queries/index'

const AddArtist = () => {
  return (
    <form>
      <TextField
        label='First Name'
        placeholder='i.e. John'
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        placeholder='i.e. Smith'
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Contact
      </Button>
    </form>
  )
}

export default AddArtist
