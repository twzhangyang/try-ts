import React, {Component} from 'react';
import './App.css';

//use state
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounter1 from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";

//effect
import ClassCounterThree from './components/ClassCounterThree';
import HookCounterFive from './components/HookCounterFive';

//Context
import ComponentC from "./components/Context/ComponentC";


export const UserContext = React.createContext('');
export const ChannelContext = React.createContext('')

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
        {/*useState*/}
        <ClassCounter/>
        <ClassCounterTwo/>
        <HookCounter1/>
        <HookCounterTwo/>
        <HookCounterThree/>
        <HookCounterFour/>

        {/*effect*/}
        <ClassCounterThree/>
        <HookCounterFive/>

        {/*context*/}
        <UserContext.Provider value={'Yang'}>
          <UserContext.Provider value={'Hello'}>
            <ComponentC/>
          </UserContext.Provider>
        </UserContext.Provider>

      </div>
    )
  }
}

export default App;
