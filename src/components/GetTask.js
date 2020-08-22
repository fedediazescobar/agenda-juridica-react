import React from "react";

const GetTask = () => {
  return (
    <div>
      <div className="container">
        <div className="col-8">
          <h2>Tarea</h2>
          <div className="row">
            <div className="col-6">Fecha: dd/mm/aaaa </div>
            <div className="col-6">Cargado por: ABC</div>
          </div>
          <div>Carátula: </div>
          <div>Juzgado: </div>
          <div className="row">
            <div className="col-6">Secretaría: </div>
            <div className="col-6">Fuero: </div>
          </div>
          <div>Jurisdicción: </div>
          <div>Dirección: </div>
          <div>
            <h2>Tarea: </h2>
          </div>
          <div>
            <h4>Descripción: </h4>
          </div>
          <div className="row">
            Completada:
            <div class="col-1 mx-3">
              <input type="checkbox" />
            </div>
            <div> FDE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTask;
