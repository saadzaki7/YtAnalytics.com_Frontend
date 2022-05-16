import {makeStyles} from "@mui/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const Leftbar= () =>{
    const classes = useStyles();
    return <Container className={classes.container}>
         
    </Container>

}

export default Leftbar;