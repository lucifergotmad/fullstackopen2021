import React from "react"

function Part({ content }) {
  return (
    <>
      <p>
        {content.name} {content.exercises}
      </p>
    </>
  )
}

export default Part
