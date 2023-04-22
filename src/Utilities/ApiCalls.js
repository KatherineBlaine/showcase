const fetchApi = async () => {
  try {
    const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E9xtZB07yTZcCOoDRFhWpJmAEhjNMQ2r')
    const fullOverview = await response.json();
    const books = await fullOverview.results.lists.reduce((accumulator, currentlist) => {
      currentlist.books.forEach(book => {
        accumulator.push(book);
      })
      return accumulator;
    }, [])
    return books;
  } catch(error) {
      return error.message;
  }
}

export { fetchApi }