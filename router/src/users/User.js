import React from 'react';

const User = (props) => {
  return (<div>Functional Component
    <p>{props.children} Age:{props.age}</p>
  </div>)
}

export default User;

