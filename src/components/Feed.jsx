import {makeStyles} from "@mui/styles";
import { Container, Grid } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack , Typography} from '@mui/material';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const useStyles = makeStyles((theme)=> ({
    root: {
        color: 'grey',
        display:"flex",
      justifyContent:"center",
      textAlign:"center",
      },
    footer:{
      display:"flex",
      justifyContent:"center",
      color: 'grey',
    },
    logo:{
      color:"green",
    }
}));

const Feed= ({movies}) =>{
    const classes = useStyles();

    return <Container>

<Stack paddingTop="20px">
  
        <Card >
      <CardHeader
        avatar={
            <Avatar alt="" src={movies.channelPhoto} />
        }
       
        title={movies.title}
      />
      <CardMedia
        component="img"
        height="500"
        image={movies.thumbnail}
        alt=""
      />
      <CardContent>
      <Grid container>
        <Grid item sm={6}>
        <Typography variant="h4" component="h2">
        {movies.videoViews}
</Typography>
<Typography variant="h6" component="h2">
  Views
</Typography>
        </Grid>
        <Grid item sm={6}>
        <Typography variant="h4" component="h2">
  {movies.comments}
</Typography ><Typography variant="h6" component="h2">
  Comments
</Typography>
        </Grid>
      </Grid>
      <Stack padding="10px">

      <Divider margin="10px"/>
          </Stack>
      <Grid container>
        <Grid item sm={6}>
        <Typography variant="h4" component="h2">
        {((((movies.videoViews/movies.subscribers))*100).toFixed(2))}%
</Typography><Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.root} variant="h6" component="h2">
  Subscriber Retention*
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Video Views/Channel Subscribers
            
          </Typography>
          <Typography>
            
            *Meant for an average video upload from the respective channel. Please ignore this statistic for viral videas.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
        <Grid item sm={6}>
        <Typography variant="h4" component="h2">
  {((movies.comments/movies.videoViews)*100).toFixed(2)}%
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.root} variant="h6" component="h2">
  Commenter Engagement
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Video Comments/Video Views
          </Typography>
        </AccordionDetails>
      </Accordion>
</Typography>
        </Grid>
      </Grid>
      <Stack paddingTop="20px" paddingBottom="10px">

      <Divider margin="10px"/>
          </Stack>
      <Typography variant="h4" className={classes.root}>
          Estimated Earnings
      </Typography>
      <Stack paddingTop="10px" paddingBottom="20px">
      <Typography variant="h4" component="h2" className={classes.logo}>
      ${((movies.videoViews/1000)*3.85).toFixed(2)}
      </Typography>
      </Stack>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.root} variant="h6" component="h2">
  High Monetizability - $10 CPM
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" component="h2" className={classes.logo}>
          ${((movies.videoViews/1000)*5.5).toFixed(2)} 
          </Typography>
          <Typography className={classes.root}>
          Video Genres: Finance, Investing, E Commerce, Software, Weight Loss, Casino, and Auto Repair.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.root} variant="h6" component="h2">
  Low Monetizablity - $4 CPM
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" component="h2" className={classes.logo}>
          ${((movies.videoViews/1000)*2.2).toFixed(2)}
          </Typography>
          <Typography className={classes.root}>
          Video Genres: Gaming, Music, ASMR, Dancing, Cooking, and Reactions.
          </Typography>
        </AccordionDetails>
      </Accordion>


      </CardContent>
      </Card>
      </Stack>

      <Stack paddingTop="20px" paddingBottom="20px">
      <Card >

      <CardHeader
        avatar={
            <Avatar alt="" src={movies.channelPhoto} />
        }
        
        title={movies.channelName}
        />
      
      <CardContent>


      
      <Grid container>
        <Grid item sm={6}>
        <Typography variant="h4" component="h2">
        {movies.channelViews}
</Typography><Typography variant="h6" component="h2">
  Channel Views
</Typography>
        </Grid>
        <Grid item sm={6}>
        <Typography variant="h4" component="h2">
  {((movies.channelViews/movies.subscribers).toFixed(2))}
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.root} variant="h6" component="h2">
  Views to Subscribers Multiple
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Channel Views/Subscribers
          </Typography>
        </AccordionDetails>
      </Accordion>
</Typography>
        </Grid>
      </Grid>
<Stack paddingTop="20px" paddingBottom="10px">

      <Divider margin="10px"/>
</Stack>
    
      <Typography variant="h4" className={classes.root}>
          Estimated Earnings
      </Typography><Stack paddingTop="10px" paddingBottom="20px">
      <Typography variant="h4" component="h2" className={classes.logo}>
      ${((movies.channelViews/1000)*3.85).toFixed(2)}
      
      </Typography></Stack>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.root} variant="h6" component="h2">
  High Monetizability - $10 CPM
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" component="h2" className={classes.logo}>
          ${((movies.channelViews/1000)*5.5).toFixed(2)}
          </Typography>
          <Typography className={classes.root}>
          Channel Genres: Finance, Investing, E Commerce, Software, Weight Loss, Casino, and Auto Repair.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.root} variant="h6" component="h2">
  Low Monetizablity - $4 CPM
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" component="h2" className={classes.logo}>
          ${((movies.channelViews/1000)*2.2).toFixed(2)}
          </Typography>
          <Typography className={classes.root}>
          Channel Genres: Gaming, Music, ASMR, Dancing, Cooking, and Reactions.
          </Typography>
        </AccordionDetails>
      </Accordion>


      </CardContent>
        </Card>
      </Stack>
    </Container>
}

export default Feed;