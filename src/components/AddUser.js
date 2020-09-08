import React, { useState } from "react";
import Axios from "axios";
import Messages from "./Messages";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [initials, setInitials] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const addUser = async (e) => {
    e.preventDefault();
    const response = await Axios.post(
      "http://localhost:5000/api/user/register",
      {
        name,
        initials,
        email,
        password,
        admin,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      }
    );
    setName("");
    setInitials("");
    setEmail("");
    setPassword("");
    setAdmin("");
    setMessage(response.data.message);
  };
  return (
    <div>
      <>
        <div className="container col-6 mt-5">
          <h2>Agregar nuevo usuario</h2>
          {message ? <Messages message={message} /> : null}
          <form className="mt-4" onSubmit={addUser}>
            <div className="form-group">
              <label htmlFor="name">Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="initials">Iniciales</label>
              <input
                type="text"
                className="form-control"
                id="initials"
                maxLength="3"
                value={initials}
                onChange={(e) => setInitials(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="admin">Administrador</label>
              <input
                type="checkbox"
                className="ml-4 form-check-input"
                id="admin"
                value={admin}
                onChange={(e) => setAdmin(e.target.value)}
              />
            </div>
            <div className="row d-flex justify-content-around">
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Agregar"
                />
              </div>

              <Link exact path to="/">
                <button className="btn btn-secondary"> Inicio</button>
              </Link>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default AddUser;
