import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phonenumber: "",
    website: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  });

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User id: {id}</h1>
      <hr />
      <ul className="list-group w-50 ">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phonenumber: {user.phonenumber}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
    </div>
  );
};

export default ViewUser;
