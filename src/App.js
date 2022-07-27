import { useState } from "react";
import "./App.css";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = function (user) {
    setUsersList((prevUsersList) => [
      { ...user, id: Math.random().toString() },
      ...prevUsersList,
    ]);
  };
  return (
    <div>
      <AddUser addNewUser={addUserHandler} />
      {usersList.length !== 0 && <UserList users={usersList} />}
    </div>
  );
}

export default App;
