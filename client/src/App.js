import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './card';
import axios from 'axios'

function App() {
  const [content, setContent] = useState({})

  useEffect(() => {
    axios.get('/getInfo')
    .then(res => {
      setContent(res.data)
    })
  }, [])

  const cards = Object.keys(content).map(key => {
    <Card key={key} name={content[key]["name"]} description={content[key]["description"]}/>
  })

  return (
    <div className="App">
      <h1>If everything is working, this is green and there are cards below me</h1>
      {cards}
    </div>
  );
}

export default App;
