import React from "react";
import Button from "./Button";
const Form = ({ onChange, onSubmit, inputValue }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          name : <input value={inputValue} onChange={onChange}></input>
        </div>
        <div>
          <Button type='submit'></Button>
        </div>
      </form>
    </>
  );
};

export default Form;
