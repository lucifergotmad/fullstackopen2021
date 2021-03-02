import React from "react"
import Part from "./Part"
const Content = ({ course }) => {
  const [part1, part2, part3] = course.parts
  return (
    <>
      <Part content={part1}></Part>
      <Part content={part2}></Part>
      <Part content={part3}></Part>
    </>
  )
}

export default Content
