import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// const styleDiv = {
//   display: "flex",
//   alignItems: "flex-start",
//   justifyContent: "space-between",
// };

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const users = res.data;
      console.log(users);
      setListOfUsers(users);
    });
  }, []);
  return (
    <div>
      {listOfUsers.map((user) => (
        <div>
          <h4>{user.name} </h4>
          <h6>{user.username} </h6>
          <h6>{user.email}</h6>
        </div>
      ))}
    </div>
  );
};

export default UserList;
