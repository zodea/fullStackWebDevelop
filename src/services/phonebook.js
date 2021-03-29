import axios from 'axios'
const baseUrl = 'http://localhost:3001/person'

const getAll = () => {
  const response = axios.get(baseUrl)
  return response.then(res => res.data)
}

const create = content => {
  const response = axios.post(baseUrl, content)
  return response.then(res => res.data)
}

export default { getAll, create }
