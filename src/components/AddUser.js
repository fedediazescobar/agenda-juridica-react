import React from "react";

const AddUser = () => {
  return (
    <div>
      <>
        <div className="container col-6 mt-5">
          <h2>Agregar nuevo usuario</h2>
          <form className="mt-4">
            <div className="form-group">
              <label for="name">Nombre y Apellido</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label for="initials">Iniciales</label>
              <input type="text" className="form-control" id="initials" />
            </div>
            <div className="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label for="password">Contraseña</label>
              <input type="text" className="form-control" id="password" />
            </div>
            <div className="form-group">
              <label for="admin">Administrador</label>
              <input
                type="checkbox"
                className="ml-4 form-check-input"
                id="admin"
              />
            </div>
            <button className="btn btn-primary"> Agregar</button>
          </form>
        </div>
      </>
    </div>
  );
};

export default AddUser;
