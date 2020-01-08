import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    
    // flexGrow: 1,
    width:"100%",
    // height:"20%"

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                                 guard-angel
          </Typography>
          <Link to ="/safelocations"><Button className="logi">safe-locations</Button></Link>
          <Link to ="/"><Button className="logi">home</Button></Link>
          <Link to ="/blog"><Button className="logi">blog</Button></Link>
          <Link to ="/about"><Button className="logi">about</Button></Link>
          <Link to ="/home"><Button className="logi">report this location</Button></Link>          
          <Link to ="/login"><Button className="logi">login</Button></Link>
          <Link to ="/"><Button className="logi">log out</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}