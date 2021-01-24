import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import HomeComponent from "./Home.js"
import UserList from "./components/UserList.js"
import UserShow from "./components/UserShow.js"
import Posts from "./components/PostShow.js"
import CommentShow from "./components/CommentShow.js"
import PostShow from "./components/PostShow.js"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
  <BrowserRouter>
   <div className='container-fluid'>
   <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="/" >BLOGS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active" >
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/users">Users</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/posts">Posts</a>
      </li>
    </ul>
  </div> */}
  <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
</nav>

      <Route path="/" component ={HomeComponent} exact={true}/>
      <Route path="/users" component={UserList} exact={true}/>
      <Route path="/users/:id" component={UserShow}/>
      <Route path="/posts" component={Posts} exact={true}/>
      <Route path="/posts/:id" component={PostShow}/>
      <Route path="/comments/:id" component={CommentShow}/>
      
     
    </div>

  </BrowserRouter>
    
  );
}

export default App;
