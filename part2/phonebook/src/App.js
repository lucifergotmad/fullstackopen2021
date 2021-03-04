import React, { useState } from "react";
import Phonebook from "./components/Phonebook";
import data from "./data";
const App = () => {
  const [persons, setPersons] = useState(data);
  const [newName, setNewName] = useState("");

  const addingName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  return (
    <>
      <Phonebook
        persons={persons}
        onSubmit={addingName}
        onChange={handleNameChange}
        inputValue={newName}
      ></Phonebook>
    </>
  );
};

export default App;
