import React from 'react'

export default function Product(props) {
  return (
     <>
         <h2>Product Details</h2>
         <hr />
         <h3>{props.title}</h3>
         <h3>{props.price}</h3>
     </>
  )
}
