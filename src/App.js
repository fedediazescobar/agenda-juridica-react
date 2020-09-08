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
import AuthContext from "./context/AuthContext";
import Axios from "axios";

function App() {
  const token = localStorage.getItem("token");
  const today = Today();
  const [userData, setUserData] = useState({});
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(today);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      if (token === null) return localStorage.setItem("token", "");

      const response = await Axios.get("http://localhost:5000/api/user-data", {
        headers: {
          "x-auth-token": token,
        },
      });
      const { data } = response;

      setUserData(data);
      if (userData !== {}) return setIsAuthenticated(true);
      if (!isAuthenticated) return window.location.assign("/");
    };
    getUser();
  }, [userData, token, isAuthenticated]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await Axios(
        `http://localhost:5000/api/tasks-by-date/${date}`
      );
      const { data } = response;
      setTasks(data);
    };

    getTasks();
  }, [date]);

  const cerrarSesion = () => {
    localStorage.setItem("token", "");
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <TaskContext.Provider value={{ tasks, setTasks }}>
            <DateContext.Provider value={{ date, setDate }}>
              <AuthContext.Provider
                value={{ isAuthenticated, setIsAuthenticated }}
              >
                <Navbar cerrarSesion={cerrarSesion} />
                <Switch>
                  <Route exact path="/home">
                    {<Redirect exact path to="/" />}
                  </Route>

                  {isAuthenticated ? (
                    <>
                      <Route exact path="/add" component={AddTask} />
                      <Route exact path="/getTask" component={GetTask} />
                      <Route exact path="/addUser" component={AddUser} />
                      <Route path="/home" render={() => <Home />} />
                      <Route exact path="/" component={Home} />
                      <Route exact path="/login">
                        <Redirect exact path="/" />
                      </Route>
                    </>
                  ) : (
                    <>
                      <Route path="/*">
                        <Redirect exact path to="/login" />
                      </Route>
                      <Route exact path="/login" component={Login} />
                    </>
                  )}
                </Switch>
              </AuthContext.Provider>
            </DateContext.Provider>
          </TaskContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
