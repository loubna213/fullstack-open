import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Country from './components/Country'

const App = () => {
  const [country, setCountry] = useState(null)
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    query.length > 0 && axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${query}`)
    .then(res => setCountry(res.data))
  }, [query])
  
  console.log(country)
  return (
    <div>
      <Form query={query} setQuery={setQuery} />
      <div>
        {country && <Country country={country} />}
      </div>
    </div>
  )
}

export default App
