import {Button, TextField, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const ForgotPasswordForm = () => {
  const [formStep, setFormStep] = useState(0);

  return (
    <div className="loginForm">
      <Typography variant="h4" style={{marginBottom: 30}}>
        Forgot Password
      </Typography>
      <div className="form_steps">
        {[...Array(3)].map((d, index) => (
          <div
            className={`step step${index + 1} ${
              index <= formStep ? "active" : ""
            }`}
            key={index}>
            <span> {index + 1} </span>
          </div>
        ))}
      </div>
      <div className="labels_of_step">
        <span>Find Account</span>
        <span>Verify Email</span>
        <span>Reset Password</span>
      </div>
      {formStep === 0  ? (
        <>
          <div className="form_field">
            <TextField
              type="email"
              name="findAccountWithEmail"
              fullWidth
              label="Email"
              placeholder="Enter Email to find your account."
             
            />
          </div>
          <div className="form_field" style={{textAlign: "center"}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large">
              Find Email
            </Button>
          </div>
          <p>
            Already have Password?
            <Link to={"/login"}> Click Here to login.</Link>
          </p>
        </>
      ) : null}
      {formStep === 1  ? (
        <>
          <div className="form_field">
            <TextField
              type="email"
              name="findAccountWithEmail"
              fullWidth
              label="Email"
              placeholder="Enter Email to find your account."
              variant="outlined"
            />
          </div>
          <div className="form_field" style={{textAlign: "center"}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large">
              Find Email
            </Button>
          </div>
          <p>
            Already have Password?
            <Link to={"/login"}> Click Here to login.</Link>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default ForgotPasswordForm;
