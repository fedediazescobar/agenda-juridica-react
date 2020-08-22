import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import GetTask from "./components/GetTask";
import AddUser from "./components/AddUser";
import Today from "./helpers/date";
import UserContext from "./context/UserContext";
import TaskContext from "./context/TaskContext";
import DateContext from "./context/DateContext";
import Axios from "axios";

function App() {
  const [userData, setUserData] = useState({});
  const [tasks, setTasks] = useState([]);
  const today = Today();
  const [date, setDate] = useState(today);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      if (token === null) return localStorage.setItem("token", "");

      //await Axios.post("http://localhost:5000/api/verify-token", { token });

      const response = await Axios.get("http://localhost:5000/api/user-data", {
        headers: {
          "x-auth-token": token,
        },
      });
      const { data } = response;

      setUserData(data);
    };
    getUser();
  });

  useEffect(() => {
    const getTasks = async () => {
      const response = await Axios(
        `http://localhost:5000/api/tasks-by-date/${date}`
      );
      const { data } = response;
      console.log(data);
      setTasks(data);
    };

    getTasks();
  }, [date]);

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <TaskContext.Provider value={{ tasks, setTasks }}>
            <DateContext.Provider value={{ date, setDate }}>
              <Navbar />
              <Switch>
                <Route path="/home" render={() => <Home />} />
                <Route exact path="/">
                  {!token ? (
                    <Redirect to="/login" />
                  ) : (
                    <Route render={() => <Home />} />
                  )}
                </Route>
                <Route path="/login">
                  {token ? <Redirect exact path to="/" /> : <Login />}
                </Route>
                <Route exact path="/home">
                  {<Redirect exact path to="/" />}
                </Route>
                <Route path="/add" component={AddTask} />
                <Route path="/getTask" component={GetTask} />
                <Route path="/addUser" component={AddUser} />
              </Switch>
            </DateContext.Provider>
          </TaskContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
