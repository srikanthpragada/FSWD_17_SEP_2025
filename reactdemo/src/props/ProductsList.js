import React from 'react'

export default function ProductsList({ products }) {
    return (
        <>
            <ul>
                <h2>Products</h2>
                {
                    products.map( p => <li>{p.name}, {p.price}</li>)
                }
            </ul>
        </>

    )
}
