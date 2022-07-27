import React from "react";
import list from "./UserList.module.css";
import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card className={list.users}>
      <ul>
        {props.users.map((cur) => (
          <li key={cur.id}>
            {cur.name} ({cur.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
