
//import and export willbe es6 feature
import React from "react"

function HomeComponent(props){
    console.log(props)
    return (
        <div class='container'><br/><br/><br/>
                    
           
            <div className='row'>
                <div className="col-sm">
                    <h3 style={{'text-align':'center'}}>WELCOME!!</h3>
                </div>
            </div><br/><br/>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}></p>
                    
                </div>
            </div>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}></p>
                    
                </div>
            </div>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}></p>
                    
                </div>
            </div>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}>
                    </p>
                </div>
            </div>

    </div>
    )
}



export default HomeComponent