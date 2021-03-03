import React from "react"
import Part from "./Part"
import Subtitle from "./Subtitle"
import Total from "./Total"
const Lesson = ({ course }) => {
  const { name, id, parts } = course
  return (
    <>
      <Subtitle text={name} key={id}></Subtitle>
      {parts.map((part) => {
        return (
          <Part text={part.name} value={part.exercises} key={part.id}></Part>
        )
      })}
      <Total values={parts}></Total>
    </>
  )
}

export default Lesson
