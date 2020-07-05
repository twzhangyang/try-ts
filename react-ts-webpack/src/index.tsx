import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

export const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => {
    return a + b;
  }

  const [value, setValue] = useState('');
  debugger

  return (
    <Fragment>
      Hello
      {sum(6, 3)}
      <h1> Todo list</h1>
      <form>
        <input type='text' required/>
        <button type='submit'> Add Todo</button>
      </form>
    </Fragment>
  )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App/>, root);
