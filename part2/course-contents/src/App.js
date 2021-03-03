import React from "react"
import Courses from "./components/Courses"
import courses from "./data"

const App = () => {
  return (
    <>
      <Courses course={courses[0]}></Courses>
    </>
  )
}

export default App
