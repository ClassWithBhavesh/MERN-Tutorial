import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleIncrement(){
    setCount(count + 1);
  }

  const exp_func = (number) => {
    for(let num = 1; num <= 1000000000; num++){}
    return number * 2;
  }

  let incrementedValue = useMemo(() => exp_func(input), [input])

  return (
    <>
      <div>{count}</div>
      <br /><br />
      <button onClick={handleIncrement}>Increase Count</button>
      <br /><br />
      <input type="number" onChange={(e) => setInput(e.target.value)} />
      <div>Incremented Value - {incrementedValue}</div>
    </>
  )
}

export default App
