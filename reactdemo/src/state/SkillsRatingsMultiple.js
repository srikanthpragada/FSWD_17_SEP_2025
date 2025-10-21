import React, { useState } from 'react'

// Component to add new skill 
function AddSkill({ skills, addSkill }) {
    let [message, setMessage] = useState("")
    function addNewSkill() {
        let skill = document.getElementById("txtSkill").value
        let rating = document.getElementById("txtRating").value

        // check whether new skill is already present 
        var found = skills.find((s, idx) => s.skill === skill)
        if (found)  // duplicate skill
            setMessage("Sorry! Duplicate")
        else {
            // call a function in parent and pass skill object 
            addSkill({ skill: skill, rating: rating })
            setMessage("")
        }
    }

    return (
        <>
            <h2>Add Skill</h2>
            SKill: <input type="text" id="txtSkill"  />
            Rating: <input type="number" id="txtRating"   /> 
            <span style={{color: 'red'}}>{message}</span>
            <p></p>
            <button onClick={addNewSkill}>Add</button>
        </>
    )
}

function ListSkills({ skills, deleteSkill }) {

    function deleteCurrentSkill(e, idx) {
        e.preventDefault()
        if (!window.confirm("Do you want to delete skill?"))
            return

        // Delete element with index idx 
        deleteSkill(idx)
    }

    return (
        <>
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
                        skills.map((s, idx) =>
                            <tr>
                                <td className="text-center">{s.skill}</td>
                                <td className="text-center">{s.rating}</td>
                                <td className="text-center">
                                    <a href="" onClick={(event) => deleteCurrentSkill(event, idx)}>Delete</a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default function SkillsRatingsMultiple() {
    let [skills, setSkills] = useState([])

    function addOneSkill(skill) {
        // Add new skill object to existing skills 
        setSkills([...skills, skill])
    }

    function deleteOneSkill(idx) {
        setSkills(skills.filter((v, i) => i !== idx))
    }

    return (
        <>
            <AddSkill skills={skills} addSkill={addOneSkill} />
            {
                skills.length > 0 ?
                    <>
                        <hr />
                        <ListSkills skills={skills} deleteSkill={deleteOneSkill} />
                    </>
                    : ''
            }
        </>
    )
}
