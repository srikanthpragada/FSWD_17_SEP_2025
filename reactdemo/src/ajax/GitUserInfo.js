import React, { useState } from 'react'
import $ from 'jquery'

export default function GitUserInfo() {
    const [details, setDetails] = useState({})
    const [done, setDone] = useState(false)
    const [username, setUsername] = useState("srikanthpragada")

    function getDetails(e) {
        e.preventDefault() 
        setDone(true)
        $.ajax(`https://api.github.com/users/${username}`,
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

    function updateUsername(e) {
        setUsername(e.target.value)
    }

    return (
        <>
            <h1>Git User Info</h1>
            <form onSubmit={getDetails}>
                Username : <input type="text" required  value={username}  onChange={updateUsername}/>
                <p></p>
                <button>Get Info</button>
            </form>
            <p></p>
            {
                details && done ? <div>
                    <h2>Name : {details.name}</h2>
                    <h3>Company : {details.company}</h3>
                    <h3>Location : {details.location}</h3>
                    <img src={details.avatar_url} style={{width:'300px', height : "300px"}}/>
                </div>
                    : done && <h3>Sorry! Couldn't get details!</h3>
            }

        </>
    )
}
