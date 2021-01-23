import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button } from '@material-ui/core';
import PostCard from './components/Atoms/Card';
// import Postcard from './components/postPage/postPage';
// import Postcard fromimport React from 'react';


import {BrowserRouter, Route} from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';


import HomeComponent from "./Home.js"

// import ProductList from "./ProductList.js"
import UserList from "./components/Blogs-UI/UserList.js"
import UserShow from "./components/Blogs-UI/UserShow.js"
import Posts from "./components/Blogs-UI/Posts.js"
import CommentShow from "./components/Blogs-UI/CommentShow.js"
import PostShow from "./components/Blogs-UI/PostShow.js"

function App() {
  return (
  <BrowserRouter>
   <div className='container-fluid'>
   <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="/" >BLOGS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
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
 './components/authorspage/authorspage'

export class App extends Component {
  constructor(props) {
    super(props);
    this.FetchPosts = this.FetchPosts.bind(this);
  
    this.state = {
       data:null
    }
  }

  FetchPosts = async ()=> {    // Here we use "async" keyword to change the type of function to ASYNCHRONOUS FUNCTION
  await axios('https://jsonplaceholder.typicode.com/todos/1')
  .then((response)=>{
    console.log("THE DATA WE GOT: ",response.data);
    this.setState({data:response.data})
    this.forceUpdate()
  })
  .catch((error)=> console.log("OOPS! THERE'S SOME ERROR",error))

}

componentDidMount(){ //This is inbuit Lifecycle method of React CLass Components
  //ComponentDidMount inbuilt method - when you want to run something as soon as the UI loads(mounts), you put that in this method. 
  // Here as soon as the component is loaded on the browser, API is called and data is received
  // now let us store the data in a variable so that we can display it on UI
  this.FetchPosts();
}
  render() {
    return (
      <div>
       
        <Header branding= "" />
        <Contact name= "Hello from Home"/>
        <button>Jaye</button>
        <Button variant="contained" color="secondary">Hello World</Button>;
        <PostCard />


        {/*But now see when we use Button tag of Material-UI, what type of button is rendered
        You need very less styling 
        
        Likewise button, there are many more components available in UI library
        
        In documentation of components, Component API means the properties it accepts, like we've given VARIANT and COLOR properties*/}

        {/* <h1>User DATA Fetched</h1>
        {
          this.state.data!=null?
          
          <ul>
          <li>{this.state.data.userId}</li>
          <li>{this.state.data.completed}</li>
          <li>{this.state.data.title}</li>
          
        </ul> : <ul>
          <li>Nothing to show</li>
          
        </ul> */}
      
    }
      
          
          {/* Email= "lokesh@gmail.com"
          phone="903232898"  */}
      {/* <Contact /> */}
      {/* <Contact name= "Mohan"
        Email= "mohan@gmail.com"
        phone="9093939922" /> */}
      </div>
    );
  }
}

export default App
