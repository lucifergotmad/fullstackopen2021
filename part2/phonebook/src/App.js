import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const personCopy = [...persons];

  const isAdded = persons.find((person) => person.name === newName);
  const filteredPerson = persons.filter(
    (person) => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  );
  const personToShow = filteredPerson.length === 0 ? persons : filteredPerson;
  const addingPerson = (event) => {
    event.preventDefault();
    if (isAdded) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setPersons(personCopy.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };
  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        addingPerson={addingPerson}
        nameValue={newName}
        numberValue={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>numbers</h3>
      <Persons persons={personToShow} />
    </>
  );
};

export default App;
