import axios from "axios"

const baseUrl = "http://localhost:8000/api/persons/"

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then( res => res.data )
}

export const addPerson = (newObj) => {
    const request = axios.post(baseUrl, newObj)
    return request.then( res => res.data)
}

export const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}${id}`)
    return request.then(res => res.data)
}

export const updatePerson = (id, newObj) => {
    const request = axios.put(`${baseUrl}${id}`, newObj)
    return request.then(res => res.data) 
}
