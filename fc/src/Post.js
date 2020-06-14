import React, { useState, useEffect } from 'react';

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

  return (
    <div className="App">
      Post page
      <h1>{item.id}</h1>
      <p>{item.title}</p>
      <p>{item.body}</p>
    </div>
  );
}

export default Post;
