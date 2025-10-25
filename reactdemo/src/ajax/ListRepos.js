import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function ListRepos() {
    const [repos, setRepos] = useState([])

    useEffect(getRepos, [])

    function getRepos() {
        $.ajax('https://api.github.com/users/gvanrossum/repos',
            {
                method: 'get',
                success: (data) => setRepos(data), // update state with response
                error:
                    () => {
                        setRepos(null); // clear output on error 
                    }
            }
        )
    }

    return (
        <>
            <h1>List of Repos</h1>
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

        </>
    )
}
