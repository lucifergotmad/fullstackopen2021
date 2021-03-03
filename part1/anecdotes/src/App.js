import React, { useState } from "react"
import anecdotes from "./data"
import Anecdote from "./components/Anecdote"
import Button from "./components/Button"
import Title from "./components/Title"
const App = () => {
  const initVotes = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [votes, setVotes] = useState(initVotes)

  const getRandomNumber = () => {
    let number = Math.floor(Math.random() * anecdotes.length)
    return setSelected(number)
  }

  const addingVotes = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    if (newVotes[selected] > newVotes[mostVoted]) {
      setMostVoted(selected)
    }
    setVotes(newVotes)
  }

  return (
    <>
      <Title text='anecdotes of the day'></Title>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <Button eventHandler={getRandomNumber} text='Next anecdote'></Button>
      <Button eventHandler={addingVotes} text='votes'></Button>
      <Title text='anecdotes of the most voted'></Title>
      <Anecdote text={anecdotes[mostVoted]} votes={votes[mostVoted]}></Anecdote>
    </>
  )
}

export default App
