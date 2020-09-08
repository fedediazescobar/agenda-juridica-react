import React, { useState, useContext, useEffect } from "react";
import Messages from "./Messages";
import Axios from "axios";
import DateContext from "../context/DateContext";
import TaskContext from "../context/TaskContext";
import { Link } from "react-router-dom";

const AddTask = () => {
  const { date } = useContext(DateContext);
  const [date_deadline, setDate_deadline] = useState(date);
  const [case_title, setCase_title] = useState("");
  const [user_initials, setUser_initials] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [initials, setInitials] = useState([]);
  const { setTasks } = useContext(TaskContext);

  const addNewTask = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://localhost:5000/api/task", {
      date_deadline,
      case_title,
      user_initials,
      title,
      content,
    });
    setDate_deadline(date);
    setCase_title("");
    setUser_initials("");
    setTitle("");
    setContent("");
    setMessage(response.data.message);
  };
  const getTasks = async () => {
    const response = await Axios(
      `http://localhost:5000/api/tasks-by-date/${date}`
    );
    const { data } = response;
    setTasks(data);
  };

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await Axios.get("http://localhost:5000/api/users");
      const sorted = data.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        if (aName < bName) return -1;
        if (aName > bName) return 1;
        return 0;
      });
      console.log(sorted);
      setInitials(data);
    };
    getUsers();
  }, []);
  return (
    <div className="container col-md-6">
      <h3 className="mt-4">Agregar Tarea</h3>
      {message ? <Messages message={message} /> : null}
      <form className="mt-4" onSubmit={addNewTask}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="formGroupExampleInput"
            name="date_deadline"
            value={date_deadline}
            onChange={(e) => setDate_deadline(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="caratula">Caratula</label>
          <input
            type="text"
            className="form-control"
            id="caratula"
            name="case_title"
            value={case_title}
            onChange={(e) => setCase_title(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="abogado">Abogado</label>
          <select
            className="custom-select"
            id="abogado"
            name="user_initials"
            value={user_initials}
            onChange={(e) => setUser_initials(e.target.value)}
          >
            <option>Selecciona un abogado...</option>
            {initials.map((user) => {
              return (
                <option key={user._id} value={user.initials}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Agregar" />
          </div>
          <div className="form-group">
            <Link to="/">
              <button className="btn btn-secondary" onClick={getTasks}>
                {" "}
                Inicio{" "}
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
