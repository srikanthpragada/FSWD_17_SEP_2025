import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function First() {
  // useNavigate is a hook that returns a navigate function
  let navigate = useNavigate();

  function gotoSecond() {
    navigate('/second') // Programmatic Navigation 
  }

  function gotoError() {
    navigate('/error')
  }

  return (
    <>
      <h1>First Component</h1>
      This is first component 
      <p></p>
      <button onClick={gotoSecond}>Second</button>
      &nbsp;
      <button onClick={gotoError}>Error</button>
    </>
  )
}
