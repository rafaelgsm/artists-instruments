import React from "react";

import { useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_ARTIST } from "../../queries/index";

import Button from "@material-ui/core/Button";

import Artist from "../listItems/Artist";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const getStyles = () => ({
  title: {
    fontSize: 50,
    padding: "15px",
    border: "5px black solid",
    marginBottom: "50px"
  }
});

const ArtistDetail = () => {
  const styles = getStyles();

  let history = useHistory();

  //////////////////////////////////////////////////////////////////////
  //READ MOVIE FROM GRAPHQL STUFF:
  //////////////////////////////////////////////////////////////////////

  //Note that if you type in the browser, it will NOT pass the state to this component!!!
  const { id } = history.location.state;

  const { loading, error, data } = useQuery(GET_ARTIST, {
    variables: { id: id }
  });

  if (loading) return "Loading...";
  if (error) return `Errror! ${error.message}`;

  //////////////////////////////////////////////////////////////////////

  const { firstName, lastName } = data.artistWithInstruments;

  console.log(data);

  return (
    <div>
      <Artist
        id={id}
        firstName={firstName}
        lastName={lastName}
        isDetail={true}
      />
      <Link
        to={{
          pathname: `/`
        }}
      >
        <Button color="primary" size="small" variant="outlined">
          GO BACK HOME
        </Button>
      </Link>
    </div>
  );
};

export default ArtistDetail;
