import React from 'react';
import axios from "axios";



class App extends React.Component {
  state = {
    user:{},
    followers:[]
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/evrgreen`)
    .then(response=>{
      console.log(response)
      this.setState({user:response.data})
      axios.get(`https://api.github.com/users/Evrgreen/followers`)
      .then(response =>{
        console.log(response)
        this.setState({followers:response.data})
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }


  render(){
  return (
    <div className="App">
      <h1>{this.state.user.login}</h1>
      {this.state.followers.map(follower=>(
        <p key={Date.now()}>{follower.login}</p>
      ))}
    </div>
  );
  }
}

export default App;
