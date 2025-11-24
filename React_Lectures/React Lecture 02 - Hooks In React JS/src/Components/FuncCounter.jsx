import React, { useState } from 'react'

function FuncCounter() {
    const [number, setNumber] = useState(0);  // [state, stateMethod]
    const [evenStatus, setEvenStatus] = useState(true);
    
    const increment = () => {
        setNumber(number + 1);
        if(evenStatus){
            setEvenStatus(!evenStatus);
        }
        else{
            setEvenStatus(!evenStatus);
        }
        console.log(evenStatus);
    }
    
    const decrement = () => {
        setNumber(number - 1);
        if(evenStatus){
            setEvenStatus(!evenStatus);
        }
        else{
            setEvenStatus(!evenStatus);
        }
        console.log(evenStatus);
    }

  return (
    <>
        <div>Currect Count : {number}</div>
        <div>{evenStatus? "Even Number": "Odd Number"}</div>  {/* Conditional Rendering - on the basis of certain condition if we've to render a component than we'll use condtional renderinng wala concept! */}
        <br />
        <button onClick={increment}>+</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={decrement}>-</button>
    </>
  )
}

export default FuncCounter