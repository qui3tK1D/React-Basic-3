import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = function (e) {
    e.preventDefault();
    if (!username.trim().length || !age.trim().length) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (none-empty values).",
      });
      return;
    }
    if (+age <= -1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.addNewUser({ username, age });
    setUsername("");
    setAge("");
  };

  const usernameHandler = function (e) {
    setUsername(e.target.value);
  };

  const ageHandler = function (e) {
    setAge(e.target.value);
  };

  const modalCloseHandler = function () {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={modalCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            id="username"
            type="text"
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input value={age} id="age" type="number" onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
