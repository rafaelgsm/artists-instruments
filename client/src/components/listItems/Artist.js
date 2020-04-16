import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'

import RemoveArtist from '../buttons/RemoveArtist'
import DisplayCard from '../cards/DisplayCard'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Artist = () => {
  const classes = useStyles()
  return (
    <DisplayCard>
      <Fragment>
        <ListItem>
          <ListItemText primary={'John Smith'} />
          <Button variant='contained' style={{ margin: '5px' }}>
            Edit
          </Button>
          <RemoveArtist />
        </ListItem>
        <CardActions>
          <Button color='primary' size='small' variant='outlined'>
            Learn More
          </Button>
        </CardActions>
      </Fragment>
    </DisplayCard>
  )
}

export default Artist
