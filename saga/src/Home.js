import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from './actions/index';

const Home = (props) => {
  const { number, increment, decrement} = props;
  return (
    <div>
      <h1>Home page</h1>
      <p>The number is {number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { numbers: { number }} = state;
  return { number };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch({ type: ActionTypes.INCREMENT }),
    decrement: () => dispatch({ type: ActionTypes.DECREMENT })
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
