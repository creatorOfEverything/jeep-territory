import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getNews(perPage, page) {
    return apiClient.get('/news?_limit=' + perPage + '&_page=' + page)
  },
  getNewsItem(id) {
    return apiClient.get('/news/' + id)
  },
  getTotal() {
    return apiClient.get('/total/')
  }
}
