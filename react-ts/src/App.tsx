import React, {Component} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounter1 from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";


class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>
            edit <code>src/app.tsx</code> and save to reload.
          </p>
          <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            learn react
          </a>
        </header>

        <p>Body</p>
      <ClassCounter/>
      <ClassCounterTwo/>
      <HookCounter1/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      </div>
    )
  }
}

export default App;
