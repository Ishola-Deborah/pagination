import { useEffect, useState } from "react";
import "./users.css";
import PaginateUsers from "../../components/paginateUsers/PaginateUsers";

const users = 45;
const URL = `https://randomuser.me/api/?results=${users}`;
const pageLimit = 5;
const noOfUsersToDisplay = 9;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    FetchUsers();
  }, []);

  const FetchUsers = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <>
      {users.length > 0 ? (
        <PaginateUsers
          users={users}
          pageLimit={pageLimit}
          noOfUsersToDisplay={noOfUsersToDisplay}
        />
      ) : (
        <span>loading...</span>
      )}
    </>
  );
};

export default Users;
