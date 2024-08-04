import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);

  const addValue = () => {
    // console.log("Clicked",counter);
    // counter++;
    counter > 19 ? 20 : counter++;
    setCounter(counter);
  }

  const removeValue = () =>{
    // console.log("Clicked",counter);
    // counter--;
    counter <= 0 ? 0 : counter--;
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value {counter}</h2>
      <button 
      onClick={addValue}
      >Add Value {counter}</button><br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p className='read-the-docs'>
        NO LOAD.!!!!. <br />
        The Counter Value will not be lower than 0 and greater than 20.
      </p>
    </>
  )
}

export default App
