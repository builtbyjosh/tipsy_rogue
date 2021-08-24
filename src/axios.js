import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.openbrewerydb.org/breweries/search?query='
})

export default instance
