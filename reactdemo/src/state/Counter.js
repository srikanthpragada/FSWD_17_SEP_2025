import React, { useState } from 'react'

export default function Counter() {
    let [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
        console.log(counter)
    }

    return (
        <>
            <h2>Counter</h2>
            <h3>{counter}</h3>
            <button onClick={increment}>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>

        </>
    )
}
