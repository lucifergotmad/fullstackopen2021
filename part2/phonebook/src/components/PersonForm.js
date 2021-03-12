import React from "react";

const PersonForm = ({
  addingPerson,
  nameValue,
  numberValue,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <div>
      <form onSubmit={addingPerson}>
        <div>
          name : <input value={nameValue} onChange={handleNameChange} />
        </div>
        <div>
          number : <input value={numberValue} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
