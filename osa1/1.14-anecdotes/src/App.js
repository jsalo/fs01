import { useState } from 'react'

const Statistics = ({anecdotes, points}) => {
  let i = 0
  let top = -1
  let score = 0
  for (i = 0; i < points.length; i++) {
    if (points[i] > score) {
      top = i
      score = points[i]
    }
  }
  if (top === -1) return
  return (
    <>
    <h1>Anecdote with most votes</h1>
    <Anecdote anecdotes={anecdotes} selected={top} points={points} />
    </>
  )
}

const Anecdote = ({anecdotes, selected, points}) => {
  let label = ''
  if (points[selected])
    label = 'has ' + points[selected] + ' votes.'
  else
    label = 'has no votes.'
  return (
    <>
    <div>{anecdotes[selected]}</div>
    <div>{label}</div>
    </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const vote = () => {
    const copy = [ ...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const nextAnecdote = () => {
    if (selected === (anecdotes.length-1))
      setSelected(0)
    else
      setSelected(selected + 1)
  }

  const Button = ({handleClick, label}) => {
    return (
      <button onClick={handleClick}>{label}</button>
    )
  }

  return (
    <div>
      <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} points={points} /> 
      </div>
      <Button handleClick={vote} selected={selected} label="vote" />
      <Button handleClick={nextAnecdote} label="next anecdote" />
      <Statistics anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App