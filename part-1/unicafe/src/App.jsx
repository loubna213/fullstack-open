import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(prev => prev + 1)
    setAll(prev => prev + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(prev => prev + 1)
    setAll(prev => prev + 1)
  }

  const handleBadClick = () => {
    setBad(prev => prev + 1)
    setAll(prev => prev + 1)
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
      <hr/>
      <p>all : {all} </p>
      <p>averag : {((good * 1) + (neutral * 0) + (bad * -1)) / all} </p>
      <p>positive : {good * 100 / all} %</p>
    </div>
  )
}

export default App