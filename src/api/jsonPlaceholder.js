import axios from "axios";

// export default axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// });

// We create a function in which we'll Fetch the API and store the data(which came as response of that API) in a variable.
 //We'll Call the function to run.  ?? Can you re-runn the react-We have App.js, Contact, Header files. How can I add this function
//We can put this function anywhere We want like that one as of now. You understood?

// ASYNCHRONOUS FUNCTION - It is a type of function which doesn't stop the program's flow.

// Like when you fetch the api, it takes time(for eg.slow internet) to send request to server and get the response back to us(client).
// So during this time your code shouldn't stop  rendering, so asynchronous menas run the function in background and let the code continue its running

// "await" keyword is used infront of that code of line which is going to take time, i.e. our API request using axios. (This rough understanding is /// enough for a start)

// Now axios takes in an address for which to request

// AXIOS has 2 blocks of code, what to when request is SUCCESSFUL (then BLOCK) and when request FAILS (catch BLOCK)
// So then block (as it is success) willl give you response(which contains our data) 

// When it fails, it'll give ERROR(instead of data) so that we can see what's wrong and correct it, which we manage in CATCH block

//SO NOW WE'LL DISPLAY DATA IN CONSOLE