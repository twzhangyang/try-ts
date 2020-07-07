import React from 'react';
import { useLocation, useHistory } from 'react-router';

const About = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);

  const goBackHandle = () => {
    history.goBack();
  }

  return (<div>About
    <button onClick={goBackHandle}>Go back</button>
  </div>)
}

export default About;
