import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button } from '@material-ui/core';
import PostCard from './components/Atoms/Card';
// import Postcard from './components/postPage/postPage';
// import Postcard from './components/authorspage/authorspage'

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
