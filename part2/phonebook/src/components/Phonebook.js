import React from "react";
import Heading from "./Heading";
import List from "./List";
import Form from "./Form";
const Phonebook = ({ persons, onSubmit, onChange, inputValue }) => {
  return (
    <>
      <Heading text='Phonebook'></Heading>
      <Form
        onChange={onChange}
        onSubmit={onSubmit}
        inputValue={inputValue}
      ></Form>
      <Heading text='Number'></Heading>
      {persons.map((person) => {
        return <List data={person} key={person.id}></List>;
      })}
    </>
  );
};

export default Phonebook;
