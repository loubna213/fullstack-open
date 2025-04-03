import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      <div>debug: {persons.map(person => <div key={person.name}><span>{person.name}</span> <span>{person.number}</span></div>)}</div>
    </div>
  )
}

export default App