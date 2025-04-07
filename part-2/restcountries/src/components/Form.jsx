import React from 'react'

const Form = ({ query, setQuery}) => {
  return (
    <form>
        Find countries <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default Form