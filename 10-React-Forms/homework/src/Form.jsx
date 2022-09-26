import React, { useState } from "react";


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g -->regex
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  return errors;
}

export default function Form() {

  
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  

  const handleSubmit = function (e) {
    e.preventDefault();
   setInput(e.target.value)
   console.log(e.target.value)
  };

  const handleChangeInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        className={errors.username && "danger"}
        type="text"
        name="username"
        value={input.username}
        onChange={handleChangeInput}
      />
      {errors.username && <p className="danger">{errors.username}</p>}
      <br></br>
      <label>Password:</label>
      <input
        className={errors.password && "danger"}
        name="password"
        type="password"
        value={input.password}
        onChange={handleChangeInput}
      />{" "}
      {errors.password && <p className="danger">{errors.password}</p>}
      <br></br>
      <input type="submit" value="Agregar" />
    </form>
  );
}
