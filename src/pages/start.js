import React from 'react'
import '../css/start/start.css'
import {
  Link
} from 'react-router-dom'

class Start extends React.Component{

  constructor(props){
    super(props)
  }



  render(){

    return(
      <div className="start-container">
        <div className="card-box">

          <Link to="/clothes">
            <div className="button">Clothes</div>
          </Link>
        </div>

      </div>


    )
  }
}
export default Start
