import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import UserContext from "../context/UserContext";
import DateContext from "../context/DateContext";
import Axios from "axios";
import { FaPlus, FaPrint, FaCheckSquare, FaUser, FaHome } from "react-icons/fa";

const Utils = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { date } = useContext(DateContext);
  const { userData } = useContext(UserContext);

  const print = () => {
    window.print();
  };
  const getTasks = async () => {
    const response = await Axios(
      `http://localhost:5000/api/tasks-by-date/${date}`
    );
    const { data } = response;
    console.log(data);
    setTasks(data);
  };

  const filterByUser = () => {
    const filteredByUser = tasks.filter(
      (task) => task.user_initials === userData.initials
    );
    return setTasks(filteredByUser);
  };

  const filterByCheck = () => {
    const filteredByCheck = tasks.filter((task) => task.completed === false);
    return setTasks(filteredByCheck);
  };

  return (
    <div className="container d-flex flex-row justify-content-around mt-2 d-print-none">
      <nav className="nav nav-pills flex-column flex-sm-row">
        <Link to="/add">
          <div className="flex-sm-fill text-sm-center nav-link">
            <FaPlus color="green" size="2rem" />
          </div>
        </Link>
        <div className="flex-sm-fill text-sm-center nav-link" onClick={print}>
          <FaPrint size="2rem" />
        </div>
        <div
          className="flex-sm-fill text-sm-center nav-link"
          onClick={filterByCheck}
        >
          <FaCheckSquare color="blue" size="2rem" />
        </div>
        <div
          className="flex-sm-fill text-sm-center nav-link"
          onClick={filterByUser}
        >
          <FaUser size="2rem" />
        </div>
        <div
          className="flex-sm-fill text-sm-center nav-link"
          onClick={getTasks}
        >
          <FaHome size="2rem" />
        </div>
      </nav>
    </div>
  );
};

export default Utils;
