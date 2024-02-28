import React from "react";
import { useState } from "react";
//import "./App.css";

function App() {

  const[count,setCount]=useState(0);

function increment(){
  setCount(count+1)
}

function decrement(){
  setCount(count-1)
}


  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
