const express = require('express')

const app = express()

app.use(express.json())

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


const PORT = 3000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`)
})