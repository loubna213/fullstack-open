import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const personExists = persons.some(person => person.name === newName);

    if (personExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const nameObj = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(nameObj));
    }

    setNewName('');
    setNewNumber('');
}

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      Filter shown with : <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: { persons.map(person => person.name.toLowerCase().includes(filter) &&
        <div key={person.name}><span>{person.name}</span> <span>{person.number}</span></div>
      )}</div>
    </div>
  )
}

export default App