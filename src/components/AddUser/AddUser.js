import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: 'Invalid Name',
        message: 'Enter Valid name/age (non-empty values)'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Enter Valid age (Greater than)'
      })
      return;
    }
    setEnteredUsername("");
    setEnteredAge("");
    props.onAddUser(enteredUsername, enteredAge);
  };

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler(){
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card propsClass={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name-placeholder">Name</label>
          <input
            type="text"
            id="name-placeholder"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age-placeholder">Age</label>
          <input
            type="number"
            id="age-placeholder"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
