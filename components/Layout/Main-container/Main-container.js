import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../../Dashboard/Dashboard";
import "./Main-container.css";

const mainContainer = props => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className="main-container">
      <Header toggleSidebar={handleToggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} />
      <main>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      </main>
    </div>
  );
};

export default mainContainer;
