import React from "react"

function Button({ eventHandler, text }) {
  return (
    <>
      <button onClick={eventHandler}>{text}</button>
    </>
  )
}
export default Button
