import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";

console.log(process.env.REACT_APP_URL);

function App() {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios.get(`/getInfo`).then((res) => {
      console.log(res);
      setContent(res.data);
    });
  }, []);

  console.log(content);

  const cards =
    Object.keys(content).length === 0
      ? []
      : content.result === undefined
      ? []
      : content.result.map((obj) => {
          return (
            <Card
              key={obj["_id"]}
              name={obj["name"]}
              description={obj["description"]}
            />
          );
        });

  return (
    <div className="App">
      <h1>
        If everything is working, this is green and there are cards below me
      </h1>
      {cards}
    </div>
  );
}

export default App;
