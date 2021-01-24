import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class PostShow extends React.Component{
    constructor(props){
    super(props)
    this.state={
        posts:{},
        comments:[],
        user:{}

    }
 }
 componentDidMount() {           
    const id=this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
        const posts=response.data
        this.setState({posts})
    })
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response)=>{
        const comments=response.data        
        this.setState({comments})
    })

 }
 render() { 
    const userid=this.state.posts.userId
    axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then((response)=>{
        const user=response.data       
        this.setState({user})
    })
    .catch((err)=>{
        console.log(err)
    })
  
    return (
       
        <div className='container'><br/>

<Card className={useStyles.root} variant="outlined">
      <CardContent>
        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
          USER DETAILS
        </Typography>
        <Typography variant="h5" component="h2">
        Name:  {this.state.user.name}
        </Typography>
        <Typography className={useStyles.pos} color="textSecondary">
        TITLE:- {this.state.posts.title}
        </Typography>
        <Typography variant="body2" component="p">
        BODY:- {this.state.posts.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
           <br />
            <h5>COMMENTS FOR THIS POST:-</h5>
            <div className='card'>
                <hr />
            <ol>
            {
                this.state.comments.map((comment)=>{
                    return(
                        <li key={comment.id} >{comment.body}</li>
                    )
                })
            }
            </ol></div>            
           
            <Link to={`/users/${this.state.user.id}`}>Other Posts of : {this.state.user.name}</Link>
        </div> 
    )
}
}

const useStyles = makeStyles({
    root: {
      width: "80%",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default PostShow