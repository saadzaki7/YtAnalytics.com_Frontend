import {makeStyles, styled} from "@mui/styles";
import { Container } from "@material-ui/core";
import { Stack } from '@mui/material';

import React from "react";
import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import Divider from '@mui/material/Divider';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const useStyles = makeStyles((theme)=> ({
    container: {
        position: "sticky",
        top: 0,
      },
}));

const Rightbar= ({movies}) =>{
    console.log(movies);
    
    

    const classes = useStyles();

    return <Container className={classes.container}>
        
        <Stack paddingTop="20px">
          <Card >
      <CardMedia
        component="img"
        height="300"
        image={movies.channelPhoto}
        alt=""
      />
      <CardContent>
      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        
      }}
    >
  
    
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonSearchRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={movies.channelName} secondary="Channel Name" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SubscriptionsRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={movies.subscribers} secondary="Subscribers" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoLibraryRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={movies.videoNum} secondary="Uploads" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FlagRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={movies.country} secondary="Country" />
      </ListItem>
    </List>

      </CardContent>
</Card>
        
        
</Stack>
  
    </Container>

}

export default Rightbar;