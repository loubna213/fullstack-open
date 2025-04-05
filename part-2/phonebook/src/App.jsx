import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonsList from './components/PersonsList'
import { addPerson, deletePerson, getAll } from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(() => {
    getAll().then(data => setPersons(data))
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
      
      addPerson(newObj)
      .then(data => setPersons(persons.concat(data)))
      
      setPersons(persons.concat(newObj));
    }

    setNewName('');
    setNewNumber('');
  }

  const handleDelete = (id) => {
    deletePerson(id).then(data => {
      confirm(`delete ${data.name}`)
      setPersons(persons.filter(person => person.id !== data.id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>

      <h3>Add a new</h3>
      <Form handleSubmit={handleSubmit} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber}/>
      
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}

export default App