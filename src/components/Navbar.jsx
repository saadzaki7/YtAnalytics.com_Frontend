import {makeStyles , AppBar, Toolbar, Typography, InputBase, alpha, Button} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useState, useEffect } from "react";



const useStyles = makeStyles((theme)=> ({

    toolbar:{
        display: "flex",
        justifyContent:"space-between",
        
    },
    logo:{
        display:"block",
        color:"white",
    },
    search:{
        [theme.breakpoints.down("sm")]:{
            display:(props)=> props.open ? "flex": "none",
        },
        display:"flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    
  },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
    },
    input:{
        color: "white",
        marginLeft: theme.spacing(1),
        width:"100%",

    },
    test:{
        margin:"10px",
        backgroundColor:alpha(theme.palette.common.white, 0.60),
            [theme.breakpoints.down("sm")]:{
                display:(props)=> (props.open ? "none": "flex"),
            },
        
    },
    test2:{
        backgroundColor:alpha(theme.palette.common.white, 0.60),
        [theme.breakpoints.down("sm")]:{
            display:(props)=> (props.open ? "none": "flex"),
        },
    },
    
    icon:{
        

        alignItems: "center",

        [theme.breakpoints.down("sm")]:{
            display:(props)=> (props.open ? "none": "flex"),
        },
    },
    
    
    
}));

const Navbar= () =>{
    var dataU;

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  const[query,setQuery] = useState("");
  let text1= "https://3659-3-210-201-99.ngrok.io/search?url="
  const urlFull= text1.concat(query);
  const handleClick = () => {
    console.log(window.window.innerWidth);
    if (window.window.innerWidth > 600)  {
        fetch(urlFull).then(response => response.text().then(text=> { console.log(text);}));
        sleep(1500).then(()=> {
          window.location.reload(false);
        })
    }
    
    }

    const handleClicks = () => {
      console.log(window.window.innerWidth);
      var random=Math.floor(Math.random() *10) +1;
      console.log(random);

      if (window.window.innerWidth > 600)  {
          if (random==1){
            var ran1="https://www.youtube.com/watch?v=BuaKzm7Kq9Q";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })


            
            
          }else if (random==2){
            var ran1="https://www.youtube.com/watch?v=VfOtgxp4Fng";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else if (random==3){
            var ran1="https://www.youtube.com/watch?v=8pDeVPkCw9U";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else if (random==4){
            var ran1="https://www.youtube.com/watch?v=QiKZYt9070U";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else if (random==5){
            var ran1="https://www.youtube.com/watch?v=FUS6ceIvUnI";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else if (random==6){
            var ran1="https://www.youtube.com/watch?v=NkiyAZ63RT8";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else if (random==7){
            var ran1="https://www.youtube.com/watch?v=vfAMLcl1S3s";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else if (random==8){
            var ran1="https://www.youtube.com/watch?v=JhHMJCUmq28";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else if (random==9){
            var ran1="https://www.youtube.com/watch?v=-TeeIEh2IE8";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }else{
            var ran1="https://www.youtube.com/watch?v=n4fXmZTVdZg";
            const urlFulls= text1.concat(ran1);
            fetch(urlFulls).then(response => response.text().then(text=> { console.log(text);}));
          sleep(1500).then(()=> {
            window.location.reload(false);
          })
          }
          
          
      }
      
      }
    
  
    


    const [open,setOpen]=useState(false);
    const classes = useStyles( {open});
    return <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logo}>YT Analytics</Typography>
            <div className={classes.search}>
            <SearchIcon/>
            <InputBase placeholder="Cut & Paste Any Video URL..." className={classes.input}  onChange={e => setQuery(e.target.value)} 
            onKeyPress={(ev) => {
                console.log(`Pressed keyCode ${ev.key}`);
                if (ev.key === 'Enter') {
                    fetch(urlFull).then(response => response.text().then(text=> { console.log(text);}));
                    sleep(1500).then(()=> {
                      window.location.reload(false);
                    })
                  ev.preventDefault();
                }
              }}/>
            
        </div>
        
        <div className={classes.icon}>
        <Button variant="contained" className={classes.test} onClick={handleClick}  >Search</Button>
        <Button variant="contained" className={classes.test2} onClick={handleClicks} >Random Video<AutoFixHighRoundedIcon/></Button>
        </div>
        </Toolbar>
        
    </AppBar>

}

export default Navbar;

//onClick={()=>setOpen(true)}