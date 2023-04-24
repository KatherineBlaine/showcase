const pullBooksFromOverview = (data) => {
  return data.results.lists.reduce((accumulator, currentlist) => {
    currentlist.books.forEach(book => {
      book.genre = currentlist.list_name;
      accumulator.push(book);
    })
    return accumulator;
  }, [])
}

const assignISBN = (data) => {
  data.forEach(book => {
    if(book.primary_isbn10 === '' || 'none') {
      book.primary_isbn10 = book.primary_isbn13;
    }
  })
}

const removeRepeats = (data) => {
  return data.reduce((accumulator, currentBook) => {
    if (!accumulator.find((book) => book.title === currentBook.title)) {
      accumulator.push(currentBook);
    }
    return accumulator;
  }, []);
}

const cleanData = (data) => {
  const books = pullBooksFromOverview(data)
  assignISBN(books)
  return removeRepeats(books)
}

export default cleanData;