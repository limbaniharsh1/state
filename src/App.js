import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let[state,setState]=useState(0);
  function check(e){
    console.log(e)
  }
  function clear(){
    setState(null)
  }
  return (
    <div>
      <input type='text' onChange={(e)=>setState(e.target.value)} />
      <button onClick={clear}>click me</button>
      <h2>{state}</h2>
    </div>
  );
}

export default App;
