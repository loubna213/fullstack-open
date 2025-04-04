import { useEffect, useState } from 'react'
import axios from "axios"
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(
      response => setPersons(response.data)
    )
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()

    const personExists = persons.some(person => person.name === newName);

    if (personExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newObj = {
        name: newName,
        number: newNumber
      };
      
      axios.post("http://localhost:3001/persons", newObj)
      .then(res => console.log(res))
      .catch( err => console.log(err.message))

      setPersons(persons.concat(newObj));
    }

    setNewName('');
    setNewNumber('');
 }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>

      <h3>Add a new</h3>
      <Form handleSubmit={handleSubmit} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber}/>
      
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App