import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">FDE Abogados</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <span className="nav-link m-auto text-light">
              <h3>Agenda Jurídica</h3>
            </span>
            <div className="nav-item dropdown text-light">
              <span
                className="nav-link dropdown-toggle text-light"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userData.name ? userData.name : "Hello guest"}
              </span>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div className="mt-2">
                  <span className="dropdown-item text-light">
                    Cerrar Sesión
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
