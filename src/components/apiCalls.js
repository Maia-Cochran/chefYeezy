const fetchKanyeData = () => {
    return fetch(`https://api.kanye.rest`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
  }

  // const fetchChefData = () => {
  //   return fetch(`https://api.funtranslations.com/translate/chef.json`)
  //   .then(response => response.json())
  //   .catch(error => console.log(`API error: ${error.message}`));
  // }

const postChefData = (someDataToSend) => {
  return fetch(`https://api.funtranslations.com/translate/chef.json`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ti_tL1NNEC8B9Me5O9jzZgeF",
      "Accept": "application/json",
      "Content-Type": "application.json"
    },
    body: JSON.stringify(someDataToSend),
  })
  .then(response => response.json())
  // .then((response) => updateResponse(response))
  .catch(error => console.log(`API error: ${error.message}`));
}



const getAllData = (data) => {
  const result = Promise.all([fetchKanyeData(data)])
    .then(responses => {
      return responses
    })
    return result;
  };

  // const getAllData = (data) => {
  //   const result = Promise.all([fetchKanyeData(data), postChefData(data)])
  //     .then(responses => {
  //       return responses
  //     })
  //     return result;
  //   };

const postAllData = (data) => {
  const result = Promise.all([postChefData(data)])
  .then(responses => {
    return responses
  })
  return result;
}
 
// export { getAllData }
export { getAllData, postAllData }