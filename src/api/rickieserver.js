import axios from 'axios'

export default class API {
  constructor(){
    this.getStatus = this.getStatus.bind(this);
  }

  getStatus(){
    return new Promise (function(resolve, reject){
      axios.get("http://localhost:8080/status").then((response)=>{
        console.log(response);
        resolve(response.data);
      }).catch((error)=>{
        console.log(error);
        reject(error);
      });
    })

  }
}
