import React from "react"

const Anecdote = ({ text, votes }) => {
  return (
    <>
      <p>{text}</p>
      <p>Has {votes} votes</p>
    </>
  )
}

export default Anecdote
