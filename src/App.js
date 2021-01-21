import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.FetchPosts = this.FetchPosts.bind(this);
  
    this.state = {
       data:null
    }
  }

  // In this way you can fetch data using API and display it to UI.
  // Now you've to first complete the UI according to that website, like display table of posts, add new button, new post form in a modal, 
  // Also design contact page and after all UI is done fetch these APIs and display data in 
  
// Actually am familiar with FUNC COMP, so this class componens create some problems like u can see below its not getting the function but yet we've defined it.. can you solve it

// l
  
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
        {/* <Contact name= "Mohan"
          Email= "mohan@gmail.com"
          phone="9093939922" /> */}
        <Contact name= "Hello from Home"/>

        <h1>User DATA Fetched</h1>
        {
          this.state.data!=null?
          
          <ul>
          <li>{this.state.data.userId}</li>
          <li>{this.state.data.completed}</li>
          <li>{this.state.data.title}</li>
          
        </ul> : <ul>
          <li>Nothing to show</li>
          
        </ul>
      
    }
          {/* Email= "lokesh@gmail.com"
          phone="903232898"  */}
      
      {/* <Contact /> */}
          
      </div>
    );
  }
}

export default App
