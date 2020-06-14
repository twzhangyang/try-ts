import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] =useState([]);
  
  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const items = await data.json();
    console.log(items);
    setItems(items);
  }

  return (
    <div className="App">
      <h1>Shop</h1>
      {items.map(item => (<p key={item.id}><Link to={`/post/${item.id}`}>{item.title}</Link></p>))}
    </div>
  );
}

export default Shop;
