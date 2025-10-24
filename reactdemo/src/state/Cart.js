import React, { useState } from 'react'

let products = [
    { productName: 'iPhone 17 Pro', price: 100000 },
    { productName: 'iPad Air', price: 60000 },
    { productName: 'Segate 2TB Harddrive', price: 10000 },
    { productName: 'LG Monitor 23 inches', price: 15000 }
]



export default function Cart() {
    let [shoppingCart, setShoppingCart] = useState([])
    let [product, setProduct] = useState({ id: 0, qty: 1 })

    function updateProduct(e) {
        console.log(e.target.value)
        setProduct({ ...product, id: e.target.value })
    }
    function updateQty(e) {
        setProduct({ ...product, qty: e.target.value })
    }

    function addToCart(e) {
        e.preventDefault()
        // Take product name and price based on id
        let cartItem = {
            name: products[product.id].productName,
            price: products[product.id].price,
            qty: parseInt(product.qty),
            amount: product.qty * products[product.id].price
        }

        setShoppingCart([...shoppingCart, cartItem])
        console.log(shoppingCart)

    }

    function deleteItem(idxToDelete) {
        setShoppingCart(  shoppingCart.filter( (p, idx) =>  idx != idxToDelete ))
    }

    function getTotalAmount() {
        let total = 0
        for(let item of shoppingCart) 
             total += item.amount 

        return total 
    }

    function getTotalQty() {
        let total = 0
        for(let item of shoppingCart) 
             total += item.qty

        return total 
    }


    return (
        <>
            <h2>Products</h2>
            <form onSubmit={addToCart}>
                Select Product :
                <select value={product.id} onChange={updateProduct}>
                    {
                        products.map((p, idx) => <option key={idx} value={idx}>{p.productName}</option>)
                    }
                </select>
                Quantity : <input type="number" value={product.qty} onChange={updateQty} />
                &nbsp;
                <button>Add To Cart</button>
            </form>
            <p></p>
            {
                shoppingCart.length > 0 &&
                <>
                    <h4>Shopping Cart</h4>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoppingCart.map((item, idx) =>
                                    <tr>
                                        <td> {item.name}</td>
                                        <td className="text-end"> {item.price}</td>
                                        <td className="text-end"> {item.qty}</td>
                                        <td className="text-end"> {item.amount}</td>
                                        <td>
                                            <button onClick={() => deleteItem(idx)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2">
                                </td>
                                <td className="text-end">
                                    {getTotalQty()}
                                </td>
                                <td className="text-end">
                                    {getTotalAmount()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </>
            }

        </>
    )
}
