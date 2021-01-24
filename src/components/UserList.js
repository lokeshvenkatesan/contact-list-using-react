
import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class UserList extends React.Component{
    constructor(){
        super()
        this.state ={
            users:[]
        }
    }    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data
            console.log(users)
            this.setState({users})
        })
    }
    render(){        
        return (
            <div className='container-md  '><br/>
                <div className='row'>
                    <div className="col-sm">
                        <h2 style={{'textAlign':'center'}}> Avilable Users : {this.state.users.length} </h2>
                    </div>
                </div> <hr/>

                    {/* <div className='card'>
                    <ul className='list-group list-group-flush'>
                        {this.state.users.map(user=>{
                            return<li key={user.id} className="list-group-item" style={{'textAlign':'left'}}><Link to={`/users/${user.id}`}>{user.name}</Link></li>                            
                        })}
                    </ul>
                    </div>                   
                    <hr/>
                    <Link to="/">back</Link> */}

<div>
            {this.state.users!==undefined?
                this.state.users.map((item,index)=> <Card style={ {border:1,
                    backgroundColor:'#e8e8e8',
                    margin:20,
                    borderRadius:10,
                    width:'75%',
                    marginLeft:'10%',
                    elevation:8,
                    flexDirection:'row' }}>
                    
                <CardContent>
                 
                  <Typography variant="h4" component="h2">
                  {index+1}{". "}<Link to={`/users/${item.id}`}>{item.name}</Link>
                  </Typography>
                  
                </CardContent>
                
              </Card>):(<Typography variant="h3" component="h2">
                   Unable To Fetch Users
                  </Typography>)
            }
            </div>
                    
            </div>
        )
    }   
}

export default UserList