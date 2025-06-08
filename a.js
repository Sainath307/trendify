import axios from 'axios'
const API_KEY = process.env.REACT_APP_GNEWS_API
const BASE_URL = 'https://gnews.io/api/v4'
export const fetchNews = async (query = 'technology') => {
  const res = await axios.get(${BASE_URL}/search?q=${query}&token=${API_KEY}&lang=en)
  return res.data.articles
}


