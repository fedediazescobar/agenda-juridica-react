import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const loginHandler = async (e) => {
    e.preventDefault();

    const loginResponse = await axios.post(
      "http://localhost:5000/api/user/login",
      { email, password }
    );
    const token = loginResponse.data.token;
    localStorage.setItem("token", token);

    const response = await axios.get("http://localhost:5000/api/user-data", {
      headers: {
        "x-auth-token": token,
      },
    });
    const { data } = response;

    setUserData(data);

    history.push("/home");
  };

  return (
    <div className="container col-4 mt-5">
      <form onSubmit={loginHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Ingresar" />
      </form>
    </div>
  );
};

export default Login;
