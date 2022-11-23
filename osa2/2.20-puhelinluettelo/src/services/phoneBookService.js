
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    console.log('getAll')
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = person => {
    console.log('create', person)
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const update = (id, person) => {
    console.log('update', id, person)
    const request = axios.put(`${baseUrl}/${id}`, person)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
}

const phoneBookFunctions = {getAll,create,update,remove}
export default phoneBookFunctions;