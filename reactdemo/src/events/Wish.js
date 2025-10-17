import React from 'react'

export default function Wish() {
    function wishUser() {
         var name = document.getElementById("txtName").value 
         alert('Hello  ' + name)
    }
    return (
        <>
            <h2>Wishing</h2>
            Enter your name :
            <input type="text" id="txtName" />
            <p></p>
            <button onClick={wishUser}>Wish</button>
        </>
    )
}
