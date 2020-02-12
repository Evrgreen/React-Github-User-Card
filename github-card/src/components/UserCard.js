import React from "react"
import "../styles/userCard.scss"

const UserCard = ({user}) =>{
    
    
    return(
        <div className="userCard__wrapper">
        <div className="userCard">
        <h1 className="userCard__username">{user.login}</h1>
        <h2 className="userCard__name">{user.name}</h2>
        <p className="userCard__bio">{user.bio}</p>
        <div className="userCard__profilePic">
            <img src={user.avatar_url} alt={`picture of ${user.name}`}/>
        </div>
        </div>
        <p className="followers">Followers: {user.followers}</p>
        <p className="following">Following: {user.following}</p>
        <img className="chart" src={`http://ghchart.rshah.org/fff/user.login}`}/>   
        </div>
      
    )
}


export default UserCard;