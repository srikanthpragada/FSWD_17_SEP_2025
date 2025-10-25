import React, { useState } from 'react'
import $ from 'jquery'

export default function JQueryGitInfo() {
    const [details, setDetails] = useState({})
    const [done, setDone] = useState(false)

    function getDetails() {
        setDone(true)
        $.ajax('https://api.github.com/users/gvanrossum',
            {
                method: 'get',
                success: (data) => setDetails(data), // update state with response
                error:
                    () => {
                        setDetails(null); // clear output on error 
                    }
            }
        )
    }


    return (
        <>
            <h1>AJAX with jQuery</h1>
            {
                details && done ? <div>
                    <h2>Name : {details.name}</h2>
                    <h3>Company : {details.company}</h3>
                    <h3>Location : {details.location}</h3>
                </div>
                    : done && <h3>Sorry! Couldn't get details!</h3>
            }

            <p></p>
            <button onClick={getDetails}>Get Rossum Details</button>
        </>
    )
}
