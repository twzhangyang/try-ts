import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name
    }

    const id = 1 ;
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {

    });

    axios.post("https://jsonplaceholder.typicode.com/users", {user})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

  }

  handleChange = event => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange}></input>
        </label>

        <button type="submit">Submit</button>
      </form>
    )
  }
}