import React, {Component} from 'react';

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>Count: {this.state.count}</p>
        <p><button onClick={this.incrementCount}>Click me</button></p>
      </div>
    )
  }
}

export default ClassCounterTwo;
