import React, { Component } from "react";
import User from './User';

class Users extends Component {
  render() {
    return <div>
      <h1>{this.props.title}</h1>
       Class component
       <User age="20">John</User> 
       <User>Tom</User> 
       </div>;
  }
}

export default Users;
