import React from 'react'

// Function component used only in the current module 
function ShowProduct({ product, disper }) {
    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <th style={{ width: '30%' }}>Name</th>
                    <th>{product.name}</th>
                </tr>
                <tr>
                    <th>Price</th>
                    <th>{product.price}</th>
                </tr>
                <tr>
                    <th>Net Price</th>
                    <th>{product.price - (product.price * disper / 100)}</th>
                </tr>
            </tbody>
        </table>
    )
}

export default function ListProducts({ products }) {
    return (
        <>
            <h2>Products</h2>
            {
                products.map((p, idx) => <ShowProduct key={idx} product={p} disper={10} />)
            }

        </>

    )
}
