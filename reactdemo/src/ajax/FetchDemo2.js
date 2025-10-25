import React, { useState } from 'react'

export default function FetchDemo2() {
    const [details, setDetails] = useState({})
    const [done, setDone] = useState(false)

    async function getDetails() {
        setDone(true)
        // AJAX call
        try {
            let response = await fetch("https://api.github.com/users/gvanrossum223")
            if (response.status !== 200) {
                throw new Error("Invalid Username!")
            }
            let data = await response.json()
            setDetails(data)
        }
        catch (err) {
            setDetails(null); // clear output 
        }
    }

    return (
        <>
            <h1>Fetch Demo</h1>
            {
                details && done ?
                    <div>
                        <h2>{details.name}</h2>
                        <h3>{details.company}</h3>
                        <h3>{details.location}</h3>
                    </div>
                    : done && <h3>Sorry! Couldn't get details!</h3>
            }

            <p></p>
            <button onClick={getDetails}>Get Rossum Details</button>

        </>
    )
}
