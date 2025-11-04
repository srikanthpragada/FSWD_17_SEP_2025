import React from 'react'
import { useParams } from "react-router-dom";


export default function Contact() {
    // useParams is a hook that returns a params object
    let params = useParams();
    
    // take value of property 'info' from params object
    let {info} = useParams();   
         
    return (
        <>
            <h1>Contact Details</h1>
            <h3>{params.info === 'phone' ? '9059057000' : 'contact@srikanthtechnologies.com'}</h3>
        </>
    )
}
