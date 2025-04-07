import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonsList from './components/PersonsList'
import { addPerson, deletePerson, getAll, updatePerson } from './services/persons'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')


  useEffect(() => {
    getAll().then(data => setPersons(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const existingPerson = persons.find(person => person.name === newName);
  
    if (existingPerson) {
      if (existingPerson.number === newNumber) {
        alert(`${newName} is already added to phonebook`);
      } else {
        const confirmReplace = confirm(`${newName} is already added to phonebook, do you want to replace the old number with the new one?`);
        if (confirmReplace) {
          updatePerson(existingPerson.id, { ...existingPerson, number: newNumber })
            .then(updatedPerson => {
              setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedPerson));
              setMessage(`updated ${updatedPerson.name}`)
              setTimeout(() => {setMessage(null)}, 3000)
            }
          );
        }
      }
    } else {
      const newObj = {
        name: newName,
        number: newNumber
      };
  
      addPerson(newObj)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson));
          setMessage(`Added ${addedPerson.name}`)
          setTimeout(() => {setMessage( null )}, 3000)
        }
      );
    }
  
    setNewName('');
    setNewNumber('');
  }

  const handleDelete = (id) => {
    deletePerson(id).then(data => {
      confirm(`delete ${data.name}`)
      setPersons(persons.filter(person => person.id !== data.id))
      setMessage(`Deleted ${data.name}`)
      setTimeout(() => {setMessage(null)}, 3000)
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter filter={filter} setFilter={setFilter}/>

      <h3>Add a new</h3>
      <Form handleSubmit={handleSubmit} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber}/>
      
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}

export default App