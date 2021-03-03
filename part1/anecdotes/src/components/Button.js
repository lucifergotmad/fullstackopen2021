import React from "react"

const Button = ({ eventHandler, text }) => {
  return (
    <>
      <button onClick={eventHandler}>{text}</button>
    </>
  )
}

export default Button
