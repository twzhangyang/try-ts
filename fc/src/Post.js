import React, { useState, useEffect } from 'react';
import {useParams, useLocation, useHistory} from 'react-router';

function Post(props) {
  useEffect(()=>{
    fetchItem();
    console.log(props);
  },[])

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const {match:{params:{id}}} = props;
    console.log(id);
    const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const item = await fetchItem.json();

    setItem(item);
    console.log(item);
  }

  const id2 = useParams();
  console.log(id2);
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  console.log(history);

  const goBack = () => {
    history.goBack();
  }

  return (
    <div className="App">
      Post page
      <h1>{item.id}</h1>
      <p>{item.title}</p>
      <p>{item.body}</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
}

export default Post;
