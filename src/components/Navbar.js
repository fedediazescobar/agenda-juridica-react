import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Navbar = ({ cerrarSesion }) => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "5rem" }}
      >
        <div className="container">
          <Link exact path to="/">
            <span className="navbar-brand">FDE Abogados</span>
          </Link>
          <div className="dropdown ml-auto">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {userData.name ? userData.name : "Hola Invitado"}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {userData.admin ? (
                <Link to="/addUser">
                  <div className="dropdown-item">Agregar Usuario</div>
                </Link>
              ) : null}
              <div className="dropdown-item" onClick={cerrarSesion}>
                Cerrar Sesión
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
