// user list component
import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



function Posts() {

    const classes = useStyles();
    const [posts,setPosts]=useState([])

    const LoadPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            const posts = response.data
            console.log("posts data",posts)
            setPosts(posts)
        }).catch((err)=> console.log("ERROR: ",err))
    }

    useEffect(()=>{
        LoadPosts()
    },[])

    return (
        <div className='container-fluid '><br/>
            <div className='row'>
                <div className="col-sm">
                    <h2 style={{'textAlign':'center'}}>Posts: {posts.length} </h2>
                </div>
            </div> <hr/>
            <div >
            {posts!=undefined?
                posts.map((item,index)=> <Card className={classes.root}>
                <CardContent>
                 
                  <Typography variant="h4" component="h2">
                  <Link to={`/posts/${item.id}`}>
                    {item.title}
                    </Link>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {item.userId}
                  </Typography>
                  <Typography variant="h5" component="p">
                    {item.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>{item.id}</Button>
                </CardActions>
              </Card>):(<Typography variant="h3" component="h2">
                   Unable To Fetch Posts
                  </Typography>)
            }
            </div>

        </div>
    )
}


const useStyles = makeStyles({
    root: {
      border:1,
      backgroundColor:'#e8e8e8',
      margin:20,
      borderRadius:10,
      width:'75%',
      marginLeft:'10%',
      elevation:8        
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 16,
    },
  });

export default Posts