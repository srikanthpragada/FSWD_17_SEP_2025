import React, { useState } from 'react'
import $ from 'jquery'
import { Link } from "react-router-dom";
import { BOOKS_URL } from './constants'

export default function SearchBooks() {
    const [selectedBooks, setSelectedBooks] = useState([])
    const [searchText, setSearchText] = useState()
    const [searched, setSearched] = useState(false)

    function searchBooks() {
        $.get(BOOKS_URL + `/search?title=${searchText}`,
            (result) => {
                setSelectedBooks(result)
                setSearched(true)
            }
        ) // get
    }

    function changeValue(event) {
        setSearchText(event.target.value)
    }

    function deleteBook(id) {
        if (!window.confirm("Do you really want to delete?"))
            return;

        $.ajax(
            {
                url: `${BOOKS_URL}/${id}`,
                method: 'delete',
                success: function () {
                    alert("Book deleted successfully!")
                    // delete book from books 
                    setSelectedBooks(selectedBooks.filter((book) => book.id !== id))
                    //getBooks();
                },
                error: function (error) {
                    console.log(error)
                    alert("Sorry! Could not delete book!")
                }
            }
        )
    }

    return (
        <>
            <h3>Search Books</h3>
            Title <input type="text" value={searchText}
                onChange={changeValue} />
            <button onClick={searchBooks}>Search</button>
            <p></p>

            {searched && selectedBooks.length > 0 ?
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedBooks.map((book) =>
                                <tr key={book.id}>
                                    <td>{book.title} </td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td className="text-center" style={{ width: '30%' }}>
                                        <button onClick={() => deleteBook(book.id)}
                                            className="btn btn-danger">Delete</button>
                                        &nbsp;
                                      
                                        &nbsp;
                                        <Link to={`/edit/${book.id}`}
                                            className="btn btn-info">Edit</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                : searched ? <h5>Sorry!! No books found</h5> : ''
            }

        </>
    )
}
