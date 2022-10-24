import React from 'react'
import './App.css';
import Image from './warrior' 

class UserProfile extends React.Component{
  render(){
    const {user} = this.props;
    return (
      <div >
        <p>{user.name}</p>
        <p>{user.email}</p>
        <Image source={user.avatar} alternativeText='user avatar'/>
      </div>
    )
  }
}

export default UserProfile