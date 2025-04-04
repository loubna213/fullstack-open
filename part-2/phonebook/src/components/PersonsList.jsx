import React from 'react'

const PersonsList = ({ persons, filter }) => {
  console.log(persons)
  return (
    <div>debug: { 
        persons.length < 0 
        ? <p>start adding numbers</p> 
        : persons.map(person => person.name.toLowerCase().includes(filter) && 
        <div key={person.name}><span>{person.name}</span> <span>{person.number}</span></div>)}
    </div>
  )
}

export default PersonsList