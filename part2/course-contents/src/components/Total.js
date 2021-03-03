import React from "react"

const Total = ({ values }) => {
  const totalExercises = values.reduce((acc, value) => {
    return acc + value.exercises
  }, 0)
  return (
    <>
      <h4>There is {totalExercises} total exercises</h4>
    </>
  )
}

export default Total
