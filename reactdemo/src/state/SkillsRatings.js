import React, { useState } from 'react'

export default function SkillsRatings() {
    let [skills, setSkills] = useState([])

    function addSkill() {
        let skill = document.getElementById("txtSkill").value
        let rating = document.getElementById("txtRating").value
        // Add new skill object to existing skills 
        setSkills([...skills, {skill : skill, rating: rating}])
    }

    function deleteSkill(e, idx) {
        e.preventDefault()
        // Delete element with index idx 
        setSkills (skills.filter( (v, i) => i !== idx))
    }
    return (
        <>
            <h2>Skills</h2>
            SKill: <input type="text" id="txtSkill" />
            Rating: <input type="number" id="txtRating" />
            <p></p>
            <button onClick={addSkill}>Add</button>
            {
                skills.length > 0 ?
                    <div>
                        <hr/>
                        <h3>Existing Skills</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">Skill</th>
                                    <th className="text-center">Rating</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  skills.map( (s, idx) =>
                                     <tr>
                                        <td className="text-center">{s.skill}</td>
                                        <td className="text-center">{s.rating}</td>
                                        <td className="text-center">
                                            <a href="" onClick={ (event) => deleteSkill(event, idx)}>Delete</a>
                                        </td>
                                     </tr>
                                  )
                                }
                            </tbody>
                        </table>
                    </div>
                    : ''
            }

        </>
    )
}
