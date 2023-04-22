const cleanData = (bookData) => {
  bookData.forEach(book => {
    if(book.primary_isbn10 === '' || 'none') {
      book.primary_isbn10 = book.primary_isbn13;
    }
  })

  const uniqueBooks = bookData.reduce((accumulator, currentBook) => {
    if (!accumulator.find((book) => book.title === currentBook.title)) {
      accumulator.push(currentBook);
    }
    return accumulator;
  }, []);
  return uniqueBooks;
}

export default cleanData;