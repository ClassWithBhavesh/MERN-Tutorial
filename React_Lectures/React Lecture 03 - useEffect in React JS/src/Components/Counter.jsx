import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(2);
    const [isEven, setIsEven] = useState(false);

    // useEffect(callbackFunction, [depArray])

    // phase 1 example - 
    // useEffect(() => {
    //     console.log("Component Rendered!")
    // }, []);

    // phase 2 example - 
    useEffect(() => {
        console.log("Component Rendered!")
    }, [isEven]);




  return (
    <div>
        <div>{count}</div>
        {/* {
            count%2 == 0? <div>State is Even</div> : <div>State is Odd</div>
        } */}
        <br />
        <div>State is : {isEven?"Even" : "Odd"}</div>
        <br />
        <button onClick={() => setCount(count + 1)}>+</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => setCount(0)}>Reset</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => setCount(count - 1)}>-</button>

        <br /><br />
        <button onClick={() => {setIsEven(!isEven)}}>Change Even State</button>
    </div>
  )
}

export default Counter
