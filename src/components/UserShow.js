import React from "react"
import axios from "axios"
import{Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class UserShow extends React.Component{
    constructor(){
        super()
        this.state ={
            users:{},
            posts:[]
        }
    }
componentDidMount(){
    //read id
    const id=this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>{
        const users=response.data
        this.setState({users})
    })
    // const userId=this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response=>{
        const posts=response.data
        console.log("post data",posts)
        this.setState({posts})
    })
}

    render(){
        return (
            <div className='container'style={{'width': '80%'}} ><br/>
                 <div className='row'>
                    <div className="col-md">
                    <h3 style={{'textAlign':'center'}}>All Posts written by the user :  {this.state.users.name} </h3><br/>
                    </div>
            </div><br/>           
                

                <div className='card'>
                <ul className='list-group list-group-flush'>
               
                        {this.state.posts!==undefined?
                this.state.posts.map((item,index)=> <Card className={useStyles.root}>
                <CardContent>
                 
                  <Typography variant="h4" component="h2">
                  <Link to={`/posts/${item.id}`}>
                    {item.title}
                    </Link>
                  </Typography>
                  <Typography className={useStyles.pos} color="textSecondary">
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
                </ul>
                </div>
                <Link to="/users" > Back </Link>
            </div>
        )
    }
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

export default UserShow