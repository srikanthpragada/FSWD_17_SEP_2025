import React, { useState } from 'react'

export default function Skills() {
    let [skills, setSkills] = useState([])

    function addSkill() {
        let skill = document.getElementById("txtSkill").value
        // Add new skill to existing skills 
        setSkills([...skills, skill])
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
            <p></p>
            <button onClick={addSkill}>Add</button>
            {
                skills.length > 0 ?
                    <div>
                        <h3>Existing Skills</h3>
                        <ul>
                            {skills.map((s, idx) =>
                                 <li key={idx}>
                                    {s} 
                                    <a href="" onClick={ (event) => deleteSkill(event, idx)}>Delete</a>
                                 </li>)}
                        </ul>
                    </div>
                    : ''
            }

        </>
    )
}
