import React from "react";

const Utils = () => {
  return (
    <div className="mt-2">
      <nav className="nav nav-pills flex-column flex-sm-row">
        <button className="flex-sm-fill text-sm-center nav-link">
          Agregar Tarea
        </button>
        <button className="flex-sm-fill text-sm-center nav-link">Print</button>
        <button className="flex-sm-fill text-sm-center nav-link">
          Checked
        </button>
        <button className="flex-sm-fill text-sm-center nav-link">User</button>
      </nav>
    </div>
  );
};

export default Utils;
