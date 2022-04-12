import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Footer from "../Layout/Footer/Footer";
import Auth from "../../services/Auth.service";
import "./Login.css";

const login = props => {
  const [spinner, setSpinner] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    setSpinner(true);
    await Auth.login("test@test.com");
    props.login(true);
    setSpinner(false);
  };

  let action = spinner ? (
    <CircularProgress />
  ) : (
    <Button variant="contained" color="primary" type="submit">
      Log In
    </Button>
  );

  return (
    <div className="container">
      <div className="login-container">
        <img
          className="react-logo"
          src="https://pngimage.net/wp-content/uploads/2018/06/react-logo-png-6.png"
          alt="App Logo"
        />
        <Card className="login-card">
          <CardHeader>
            <h2>Login</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <TextField
                required
                label="Email"
                value="test@test.com"
                type="email"
              />
              <TextField
                required
                label="Password"
                value="1234"
                type="password"
              />
              <section className="form-actions">{action}</section>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default login;
