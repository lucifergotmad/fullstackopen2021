import React, { useState } from "react";
import Phonebook from "./components/Phonebook";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arthur Leywin", id: 1 }]);
  const [newName, setNewName] = useState("");

  const isNameAdded = persons.map((person) => {
    return newName === person.name ? true : false;
  });

  const addingName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };
    if (!isNameAdded) {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
    alert(`${newName} is already added`);
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
