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
const remove = id => {
  const response = axios.delete(`${baseUrl}/${id}`)
  return response.then(res => res.status)
}

export default { getAll, create, remove }
