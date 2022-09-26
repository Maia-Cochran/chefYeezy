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

//CANNOT GET API KEY TO WORK, ONLY HAVE 5 REQUESTS PER HOUR
//FRUSTRATING TO ACHIEVE... ? WILL LOOK AT BEYOND FUNCTIONALITY

export { fetchKanyeData, fetchChefData }
