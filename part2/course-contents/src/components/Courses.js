import React from "react"
import Title from "./Title"
import Lesson from "./Lesson"
const Courses = ({ course }) => {
  const { name, lessons } = course

  return (
    <>
      <Title text={name}></Title>
      {lessons.map((lesson) => {
        return <Lesson course={lesson} key={lesson.id}></Lesson>
      })}
    </>
  )
}

export default Courses
