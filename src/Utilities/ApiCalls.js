const fetchApi = async () => {
  try {
    const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E9xtZB07yTZcCOoDRFhWpJmAEhjNMQ2r')
    const fullOverview = await response.json()
    console.log(fullOverview)
    return fullOverview;
  } catch(error) {
    return error.message
  }
}

export { fetchApi }