import React, {Component} from 'react';

class ClassCounterThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count !== this.state.count) {
      console.log('updating document title');
      document.title = `Clicked ${this.state.count} times`
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={e => {
          this.setState({name: e.target.value})
        }}/>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click {this.state.count}</button>
      </div>
    )
  }

}

export default ClassCounterThree;
