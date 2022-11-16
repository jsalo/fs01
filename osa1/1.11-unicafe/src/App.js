import { useState } from 'react'

const StatisticLine = ({label, result}) => {
  return (
    <tr><td>{label}</td><td> {result}</td></tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) return
  const score = good - bad
  const positives = ((good / total) * 100) + '%'
  return (
    <div>
      <h1>Statistics</h1>
      <table><tbody>
      <StatisticLine label="good" result={good} />
      <StatisticLine label="neutral" result={neutral} />
      <StatisticLine label="bad" result={bad} />
      <StatisticLine label="average" result={score/total} />
      <StatisticLine label="positive" result={positives} />
      </tbody></table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
 
  return (
    <div>
      <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

