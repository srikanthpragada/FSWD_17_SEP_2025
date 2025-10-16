import React from 'react'

export default function Course() {
    let title = "Gen AI"
    let fee = 10000

    return (
        <div>
            <h2>Course Details</h2>
            <h3>Title : {title} </h3>
            <h3>Course Fee : {fee}</h3>
        </div>
    )
}
