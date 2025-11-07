var db = require("./booksDatabase")

async function getBooks(req, res) {
  try {
    let books = await db.getBooks()
    res.json(books)
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

// Expects a querystring with author field  /books/author?author=authorname
async function getBooksByAuthor(req, res) {
  try {
    let books = await db.getBooksByAuthor(req.query.author)
    res.json(books)
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function getBookById(req, res) {
  try {
    let book = await db.getBookById(req.params.id)
    if (book)  // book is found
      res.json(book)
    else   // book is not found 
      res.status(404).send("Book Id Not Found!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

// Querystring - /books/search?title=Programming
async function searchBooks(req, res) {
  try {
    let books = await db.searchBooks(req.query.title)
    res.json(books);
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}


async function addBook(req, res) {
  try {
    if (!validateBook(req.body)) {
      res.status(400).send("Invalid Book Data!")  // bad request 
      return
    }
    await db.addBook(req.body)
    res.status(201).send("Book Added!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function updateBook(req, res) {
  try {

    if (!validateBook(req.body)) {
      res.status(400).send("Invalid Book Data!")
      return
    }

    updated = await db.updateBook(req.params.id, req.body)
    if (updated)
      res.status(200).send("Book Updated!")
    else
      res.status(404).send("Book Id Not Found!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function deleteBook(req, res) {
  try {
    let deleted = await db.deleteBook(req.params.id)
    if (deleted)
      res.status(204).send("Book Deleted!")
    else
      res.status(404).send("Book Id Not Found!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function getAuthorsBooksCount(req, res) {
  try {
    let authors = await db.getAuthorsBooksCount()
    res.json(authors)
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

function validateBook(book) {
  if (!book.title || !book.author || !book.price)
    return false
  if (book.price < 0)
    return false

  return true
}


module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
  getAuthorsBooksCount,
  getBooksByAuthor
}

