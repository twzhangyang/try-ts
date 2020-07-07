import React from 'react';
import { useParams } from 'react-router';

// const User = ({ match }: any) => {
//   console.log(match);
//   return (
//     <div>User {match.params.name}</div>
//   )
// }

const User = () => {
  const { name } = useParams();
  return (
    <div>User {name}</div>
  )
}


export default User;
