import React, { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const { username, password } = inputs;

  function handleChange(input) {
    const { name, value } = input.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="[ col-sm-4 ]"></div>
        <div className="[ col-sm-4 ] [ login ]">
          <h1> Login </h1>
          <form onSubmit={handleSubmit}>
            <p> Enter Username </p>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="form-control"
            />
            <br />
            <p> Password </p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control"
            />
            <br />
            <input type="submit" className="btn" />
          </form>
        </div>
        <div className="[ col-sm-4 ]"></div>
      </div>
    </div>
  );
}
