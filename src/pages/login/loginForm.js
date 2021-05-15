import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="loginForm">
      <Typography variant="h4" style={{marginBottom: 30}}>
        Login
      </Typography>
      <form>
        <div className="form_field">
          <TextField
            name="email"
            label="Email"
            placeholder="Enter Email/UserId"
            fullWidth
          />
        </div>
        <div className="form_field">
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            fullWidth
          />
        </div>
        <div className="form_field" style={{textAlign: "center"}}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large">
            Login
          </Button>
        </div>
        <p>
          Forgot Password?
          <Link to={"/login/forgotPassword"}> Click Here to reset.</Link>
        </p>
      </form>
    </div>
  );
};
export default LoginForm;
