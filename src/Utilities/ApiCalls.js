const fetchApi = async (url) => {
    const response = await fetch(url)
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