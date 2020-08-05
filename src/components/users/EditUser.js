import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phonenumber: "",
    website: "",
  });

  const { name, username, email, phonenumber, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    await Axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="card container shadow  cardsection">
      <h1 className="mx-auto mt-5">Edit A User</h1>
      <div className="card-body ">
        <form onSubmit={(e) => onSubmitChange(e)}>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Your  Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phonenumber"
              value={phonenumber}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block btn-outline-dark ">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
