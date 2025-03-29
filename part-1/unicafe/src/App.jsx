import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(prev => prev + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(prev => prev + 1)
  }

  const handleBadClick = () => {
    setBad(prev => prev + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button title="good" onClick={handleGoodClick} />
        <Button title="neutral" onClick={handleNeutralClick}/>
        <Button title="bad" onClick={handleBadClick}/>
      </div>
      <h2>Statistics:</h2>
      <p>good : {good} </p>
      <p>neutral : {neutral} </p>
      <p>bad : {bad} </p>
    </div>
  )
}

export default App