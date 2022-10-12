const fetchKanyeData = async () => {
  return await fetch(`https://api.kanye.rest`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
}

const fetchChefData = async (kanyeSays) => {
  return await fetch(`https://api.funtranslations.com/translate/chef.json?text=${kanyeSays}`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
}

//Only have 5 req per hour, 60 per day, looking into possible solutions

export { fetchKanyeData, fetchChefData }
