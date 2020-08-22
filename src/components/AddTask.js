import React from "react";

const AddTask = () => {
  return (
    <div className="container col-md-6">
      <h3 className="mt-4">Agregar Tarea</h3>
      <form className="mt-4">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="form-group">
          <label htmlFor="numCarpeta">Nº Carpeta</label>
          <input type="text" className="form-control" id="numCarpeta" />
        </div>
        <div className="form-group">
          <label htmlFor="caratula">Caratula</label>
          <input type="text" className="form-control" id="caratula" />
        </div>
        <div className="form-group">
          <label htmlFor="abogado">Abogado</label>
          <input type="text" className="form-control" id="abogado" />
        </div>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
