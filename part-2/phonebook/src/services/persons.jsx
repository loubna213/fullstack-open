import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then( res => res.data )
}

export const addPerson = (newObj) => {
    const request = axios.post(baseUrl, newObj)
    return request.then( res => res.data)
}

export const deletePerson = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`)
    return request.then(res => res.data)
}

export const updatePerson = (id, newObj) => {
    const request = axios.put(`http://localhost:3001/persons/${id}`, newObj)
    return request.then(res => res.data) 
}