import React, { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")
  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>{persons.name}</h2>
      ...
    </div>
  )
}

export default App
