import React, { useState } from 'react'

export default function FetchDemo() {
    const [details, setDetails] = useState({})
    const [done, setDone] = useState(false)

    function getDetails() {
        setDone(true)
        // AJAX call
        fetch("https://api.github.com/users/gvanrossum")
            .then(response => {
                //console.log(response);
                if (response.status !== 200) {
                    throw new Error("Invalid Username!")
                }
                return response.json()
            })
            .then(data => setDetails(data))
            .catch((err) => {
                setDetails(null); // clear output 
                //alert(err)
            })
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
