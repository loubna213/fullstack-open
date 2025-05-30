const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send(`<h1>Hello there!</h1>`)
})

app.get("/api/persons", (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(`
        <p>Pkonebook has info for ${persons.length} people</p>
        <p>${Date()}</p>
    `)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(person => person.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    persons = persons.filter(person => person.id !== id)
    res.json(persons)
})

app.post('/api/persons', (req, res) => {
    const person = req.body
    const id = Date.now()
    const newPerson = {
        id,
        ...person,
    }
    res.json(newPerson)
    
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

const PORT = 8000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`)
})
