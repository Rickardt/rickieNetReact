import React from 'react'
import '../css/start/start.css'
import {
  Link
} from 'react-router-dom'
import API from '../api/rickieserver'

class Start extends React.Component{

  constructor(props){
    super(props);
    this.state={
      serverStatus:""
    }
  }
  componentDidMount(){
    var api = new API
    api.getStatus().then((response)=>{
      console.log(response);
      this.setState({
        serverStatus:response
      })
    })

  }

  render(){

    return(
      <div className="start-container">
        <div className="card-box">
          <h1>
            {this.state.serverStatus?this.state.serverStatus:null}
          </h1>
        </div>

      </div>


    )
  }
}
export default Start
