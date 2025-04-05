import React from 'react'
import Person from './Person'

const PersonsList = ({ persons, filter, handleDelete }) => {
  return (
    <div>debug: { 
        persons.length < 0 
        ? <p>start adding numbers</p> 
        : persons.map(person => person.name.toLowerCase().includes(filter) && 
          <Person key={person.name} person={person} handleDelete={() => handleDelete(person.id)} />)}
    </div>
  )
}

export default PersonsList