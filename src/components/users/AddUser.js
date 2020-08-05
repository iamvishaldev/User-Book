import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
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
    await Axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  return (
    <div className="card container shadow  cardsection">
      <h1 className="mx-auto mt-5">Add A User</h1>
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
          <button className="btn btn-primary btn-block btn-outline-dark ">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
