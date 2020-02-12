import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard"
import "./styles/app.scss"
 


class App extends React.Component {
  state = {
    user:{},
    followers:[]
  }

  componentDidMount(){
    // axios.get(`https://api.github.com/users/evrgreen`)
    // .then(response=>{
    //   // console.log(response)
    //   // this.setState({user:response.data})
    //   localStorage.setItem("user", JSON.stringify(response.data))
    //   axios.get(`https://api.github.com/users/Evrgreen/followers`)
    //   .then(response =>{
    //     // console.log(response)
    //     localStorage.setItem("followers",JSON.stringify(response.data))
    //     // this.setState({followers:response.data})
    //   })
    // })
    // .catch(error=>{
    //   console.log(error)
    // })
    let followersData = JSON.parse(localStorage.getItem("followers"))
    let userData = JSON.parse(localStorage.getItem("user"));
    this.setState({
      user:userData,
      followers:followersData});
    console.log(this.state.user)
  }


  render(){
  return (
    <div className="app">
      <UserCard user={this.state.user}/>
      {this.state.followers.length >0 ?
        this.state.followers.map(follower=>(
        <p key={follower.id}>{follower.login}</p>
      )):<p>Loading</p>}
    </div>
  );
  }
}

export default App;
