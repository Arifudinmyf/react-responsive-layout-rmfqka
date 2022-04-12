import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainContainer from "./components/Layout/Main-container/Main-container";
import Login from "./components/Login/Login";
import Auth from "./services/Auth.service";
import "./style.css";

export default function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const isLogged = Auth.isLogged();
      userHasAuthenticated(isLogged);
      setSpinner(false);
    } catch (e) {
      console.error(e);
      setSpinner(false);
    }
  }

  const onLogin = (event) => {
    userHasAuthenticated(event);
  };

  let routes = (
    <Switch>
      <Route path="/login" render={props => <Login login={onLogin} />} />
      <Redirect to="/login" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/dashboard" exact component={MainContainer} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }

  return <BrowserRouter>{!spinner && routes}</BrowserRouter>;
}

render(<App />, document.getElementById("root"));
