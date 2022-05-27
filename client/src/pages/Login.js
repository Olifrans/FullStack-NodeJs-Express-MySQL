import React, { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

function Login() {
  //let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
      //navigate("/");
    });
  };

  return (
    <div className="!!!!!">
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button type="submit" onClick={login}>
        Fazer Login
      </button>
    </div>
  );
}

export default Login;
