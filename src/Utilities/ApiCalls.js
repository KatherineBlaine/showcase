const fetchApi = async () => {
    const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E9xtZB07yTZcCOoDRFhWpJmAEhjNMQ2r')
    const fullOverview = await response.json();
    const books = await fullOverview.results.lists.reduce((accumulator, currentlist) => {
      currentlist.books.forEach(book => {
        book.genre = currentlist.list_name;
        accumulator.push(book);
      })
      return accumulator;
    }, [])
    return books;
}

export { fetchApi }