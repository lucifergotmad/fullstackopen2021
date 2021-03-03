import React, { useState } from "react"
import anecdotes from "./data"
import Anecdote from "./components/Anecdote"
import Button from "./components/Button"
const App = () => {
  const points = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)

  const getRandomNumber = () => {
    let number = Math.floor(Math.random() * anecdotes.length)
    return setSelected(number)
  }

  return (
    <>
      <Anecdote text={anecdotes[selected]}></Anecdote>
      <Button eventHandler={getRandomNumber} text='Next anecdote'></Button>
    </>
  )
}

export default App
