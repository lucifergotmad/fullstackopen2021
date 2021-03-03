import React, { useState } from "react"
import anecdotes from "./data"
import Anecdote from "./components/Anecdote"
import Button from "./components/Button"
const App = () => {
  const initVotes = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initVotes)

  const getRandomNumber = () => {
    let number = Math.floor(Math.random() * anecdotes.length)
    return setSelected(number)
  }

  const addingVotes = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  return (
    <>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <Button eventHandler={getRandomNumber} text='Next anecdote'></Button>
      <Button eventHandler={addingVotes} text='votes'></Button>
    </>
  )
}

export default App
