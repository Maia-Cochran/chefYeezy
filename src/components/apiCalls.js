// const fetchKanyeData = () => {
//     return fetch(`https://api.kanye.rest`)
//     .then(response => response.json())
//     // .catch(error => console.log(`API error: ${error.message}`));
//   }

const fetchKanyeData = async () => {
    const response = await fetch(`https://api.kanye.rest`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
      }

  const fetchChefData = async (kanyeSays) => {
    return fetch(`https://api.funtranslations.com/translate/chef.json?text=${kanyeSays}`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
  }

export { fetchKanyeData, fetchChefData }