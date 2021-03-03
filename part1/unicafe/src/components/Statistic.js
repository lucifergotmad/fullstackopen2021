import React from "react"
import Result from "./Result"

function Statistic({ data }) {
  const { good, neutral, bad, allVote, averageVote, positiveVote } = data
  return (
    <table>
      <Result text='good' value={good}></Result>
      <Result text='neutral' value={neutral}></Result>
      <Result text='bad' value={bad}></Result>
      <Result text='all' value={allVote}></Result>
      <Result text='average' value={averageVote}></Result>
      <Result text='positive' value={positiveVote}></Result>
    </table>
  )
}

export default Statistic
