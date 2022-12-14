import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count+8)
  }
  const handleReduce = () => {
    setCount(count-8)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>    
        <h1>
          Counter
        </h1>
        <span>{count}</span>
        <br />
        <br />
        <br />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
      </header>
    </div>
  );
}

export default App;
