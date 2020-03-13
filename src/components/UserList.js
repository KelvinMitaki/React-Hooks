import React from "react";
import useResource from "./useResource";

const UserList = () => {
  const users = useResource("users");
  const res = users.map(user => {
    return (
      <div key={user.id}>
        <li>{user.name}</li>
      </div>
    );
  });
  return (
    <div>
      <ul>{res}</ul>
    </div>
  );
};

export default UserList;
