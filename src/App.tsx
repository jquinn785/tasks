import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        UM COS420 with React Hooks and TypeScript
      </header>
      <h1>This is heading text</h1>
      <img src="mountains.jpg" alt="A picture of the himalaya mountains" />
      <ol>
        <li>First thing</li>
        <li>Another thing</li>
        <li>A third item</li>
      </ol>
      <Button
        onClick={() => {
          console.log("Hello World!");
        }}
      >
        Log Hello World
      </Button>
      <div
        style={{ width: "10px", height: "20px", backgroundColor: "red" }}
      ></div>
      <p>
        Edit <code>src/App.tsx</code> and save. This page will automatically
        reload. Hello World
      </p>
      <p>John Quinn</p>
    </div>
  );
}

export default App;
