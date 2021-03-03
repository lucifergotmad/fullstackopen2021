import React from "react"

function Result({ text, value }) {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        {text === "positive" ? <td>{value + "%"}</td> : <td>{value}</td>}
      </tr>
    </tbody>
  )
}

export default Result
