import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [setAuthState] = useContext(AuthContext);

  const login = () => {
    const data = { username: username, password: password };

    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        // localStorage para manter cache de login na abertura de uma nova aba
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        navigate("/");
      }
    });
  };

  return (
    <div className="loginContainer">
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
