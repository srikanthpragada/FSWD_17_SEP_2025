import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function ListRepos() {
    const [repos, setRepos] = useState([])

    useEffect(getRepos, [])

    function getRepos() {
        $.ajax('https://api.github.com/users/gvanrossum/repos',
            {
                method: 'get',
                success: (response) => setRepos(response), // update state with response
                error:
                    (ex) => {
                        setRepos(null); // clear output on error 
                        alert(ex.responseJSON.message)
                    }
            }
        )

        // Clean up function is to be returned
        return () => {
            console.log('Clean Up Function')
        }
    }

    return (
        <>
            <h1>List of Repos</h1>
            {repos ?
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Repo Name</th>
                            <th>Description</th>
                            <th>Created On</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            repos.map((r, idx) => <tr key={idx}>
                                <td>{r.name}</td>
                                <td>{r.description}</td>
                                <td>{r.created_at}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                : <h4>Sorry! Could not get details!</h4>
            }

        </>
    )
}
