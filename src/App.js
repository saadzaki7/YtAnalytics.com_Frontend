import React, { useEffect, useState } from "react";
import { Button,Grid } from "@mui/material";
import {makeStyles} from "@material-ui/styles";
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";


function App() {
  document.body.style = 'background: rgba(0, 0, 0, 0.1);';
  var dataU;
  var good;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://3659-3-210-201-99.ngrok.io/movies").then(response => response.json().then(data=> {setMovies(data.movies);}));
  }, []);
  console.log(JSON.stringify(movies));
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  const[query,setQuery] = useState("");
  let text1= "https://3659-3-210-201-99.ngrok.io/search?url="
  const urlFull= text1.concat(query);
  const handleClick = () => {
      fetch(urlFull).then(response => response.text().then(text=> { console.log(text);}));
      sleep(2000).then(()=> {
        window.location.reload(false);
      })
    }
    
    sleep(300).then(()=> {
      good = JSON.stringify(dataU);
      console.log(good);
    })
    const useStyles = makeStyles((theme) => ({



    }));

  return <div className="App">
      <Navbar style={{ background: '#2E3B75' }} />
      <Grid container>
        <Grid item sm={9}>
          <Feed movies={movies} />
        </Grid>
        <Grid item sm={3}>
          <Rightbar movies={movies} />
        </Grid>
      </Grid>

      
      </div>
      
      
      
  

    

}

export default App;
