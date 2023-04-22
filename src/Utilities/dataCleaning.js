const cleanData = (data) => {
  data.forEach(value => {
    if(value.primary_isbn10 === '' || 'none') {
      value.primary_isbn10 = value.primary_isbn13;
    }
  })

  const uniqueBooks = data.reduce((accumulator, currentValue) => {
    if (!accumulator.find((value) => value.title === currentValue.title)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return uniqueBooks;
}

export default cleanData;