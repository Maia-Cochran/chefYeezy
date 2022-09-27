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

//COULD I USE A PROMISE.ALL HERE FOR THE APIS??
//NO, BECAUSE I WANT TO TRANSLATE ON BUTTON CLICK, 
//NOT ON PAGELOAD... SOMETHING TO CONSIDER FOR FUTURE ITERATION

//CANNOT GET API KEY TO WORK FOR MORE TOKENS
//ONLY HAVE 5 REQUESTS PER HOUR, 60 PER DAY
//WILL LOOK INTO FOR FUTURE ITERATION

export { fetchKanyeData, fetchChefData }
