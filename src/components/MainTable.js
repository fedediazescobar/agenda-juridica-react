import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import DateContext from "../context/DateContext";
import Axios from "axios";

const MainTable = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { date } = useContext(DateContext);
  const dateDone = new Date().toLocaleDateString();
  const completedStyle = {
    color: "rgba(0,0,0,0.3)",
    textDecoration: "line-through",
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Abogado</th>
            <th scope="col">Carátula</th>
            <th scope="col">Tarea</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task._id} style={task.completed ? completedStyle : null}>
                <th scope="row">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={async () => {
                          await Axios.post(
                            "http://localhost:5000/api/toggleCompletedTask",
                            {
                              id: task._id,
                              completed: task.completed,
                              date_completed: !task.completed ? dateDone : "",
                            }
                          );

                          const response = await Axios(
                            `http://localhost:5000/api/tasks-by-date/${date}`
                          );
                          const { data } = response;

                          console.log(data);
                          setTasks(data);
                        }}
                      />
                    </div>
                  </div>
                </th>
                <td>{task.user_initials}</td>
                <td>{task.case_title}</td>
                <td>{task.title}</td>
                <td>{task.content}</td>
                <td>{task.date_completed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
