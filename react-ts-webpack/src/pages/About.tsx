import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { log } from 'console';

const About = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(window.location.href);
  console.log(window.location);

  const goBackHandle = () => {
    history.goBack();
  }

  return (<div>About
    <button onClick={goBackHandle}>Go back</button>
  </div>)
}

export default About;
