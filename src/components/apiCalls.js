const fetchAllData = (dataType) => {
    return fetch(`https://api.kanye.rest`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
  }

const getAllData = (data) => {
  const result = Promise.all([fetchAllData(data)])
    .then(responses => {
      return responses
    })
    return result;
  };
 
export { getAllData }
