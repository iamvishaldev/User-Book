import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await Axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await Axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow table-dark table-striped table-hover table-borderless ">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="col">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <Link
                  class="btn btn-primary mr-2 mt-1"
                  to={`users/view/${user.id}`}
                >
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2 mt-1"
                  exact
                  to={`users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  class="btn btn-danger mt-1"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
