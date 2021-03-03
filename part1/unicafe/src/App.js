import React, { useState } from "react"
import Button from "./components/Button"
import Title from "./components/Title"
import Statistic from "./components/Statistic"
import Info from "./components/Info"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteGood = () => setGood(good + 1)
  const voteNeutral = () => setNeutral(neutral + 1)
  const voteBad = () => setBad(bad + 1)

  const data = {
    good: good,
    neutral: neutral,
    bad: bad,
    allVote: good + neutral + bad,
    averageVote: (good + neutral + bad) / 3,
    positiveVote: (good / (good + neutral + bad)) * 100,
  }

  if (data.allVote === 0) {
    return (
      <>
        <Title text='Give a feed back'></Title>
        <Button eventHandler={voteGood} text='Good'></Button>
        <Button eventHandler={voteNeutral} text='Neutral'></Button>
        <Button eventHandler={voteBad} text='Bad'></Button>
        <Title text='Statistic'></Title>
        <Info text='Feedback is empty'></Info>
      </>
    )
  }
  return (
    <>
      <Title text='Give a feed back'></Title>
      <Button eventHandler={voteGood} text='Good'></Button>
      <Button eventHandler={voteNeutral} text='Neutral'></Button>
      <Button eventHandler={voteBad} text='Bad'></Button>
      <Title text='Statistic'></Title>
      <Statistic data={data}></Statistic>
    </>
  )
}

export default App
