import React from 'react'

const Persons = ({ persons, filter }) => {
  return (
    <div>debug: { persons.map(person => person.name.toLowerCase().includes(filter) && 
          <div key={person.name}><span>{person.name}</span> <span>{person.number}</span></div>)}
    </div>
  )
}

export default Persons