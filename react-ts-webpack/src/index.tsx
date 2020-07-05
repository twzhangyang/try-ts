import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

export const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => {
    return a + b;
  }

  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  }

  console.log(todos);

  return (
    <Fragment>
      Hello
      {sum(6, 3)}
      <h1> Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} required/>
        <button type='submit'> Add Todo</button>
      </form>
    </Fragment>
  )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App/>, root);
