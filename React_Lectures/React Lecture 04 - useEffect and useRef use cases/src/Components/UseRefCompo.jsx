import React, { useRef, useState } from 'react'

function UseRefCompo() {
    // const inpRef = useRef(null);

    // function handleFocus(){
    //     inpRef.current.focus();
    //     inpRef.current.style.padding = '30px';
    // }


    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    function handleCount(){
        setCount(count + 1);
    }
    countRef.current += 1;


  return (
    <>
    {/* use Ref to target a DOM Element */}
        {/* <img ref={inpRef} src="../assets/react.svg" alt="image is not available" />
        <input ref={inpRef} type="text" placeholder='Enter your name' />
        <br /><br />
        <button onClick={handleFocus}>Focus Input</button> */}


    {/* userRef to maintain the state without re-rendering */}
        <div>State Count : {count}</div>
        <p>Component Rendered : {countRef.current} times</p>
        <button onClick={handleCount}>Increment Count</button>
    </>
  )
}

export default UseRefCompo