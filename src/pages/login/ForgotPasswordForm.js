import {Button, TextField, Typography} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import OTPInput from "../../components/OTPInputField";

const ForgotPasswordForm = () => {
  const [formStep, setFormStep] = useState(0);

  return (
    <div className="loginForm">
      <Typography variant="h4" style={{marginBottom: 30}}>
       {formStep === 1 ? 'Verify Email' :(formStep === 2 ? 'New Password' : 'Forgot Password')}
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
              size="large" onClick={() => setFormStep(1)}>
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
          <Alert severity="info" className="OtpInfo"> An <strong>OTP</strong> has been send to your email <b>test@gmail.com.</b> Please check with your inbox , if not found there then check in your spam folder also. if not  received yet then resend OTP by <a>Clicking here</a> </Alert>
          <div className="form_field">
            <OTPInput
              autoFocus={true}
              isNumberInput={true}
              length={4}
              className="otpContainer"
              inputClassName="otpInput"
              onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
            />
          </div>
          <div className="form_field" style={{textAlign: "center"}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large" 
              onClick={() => setFormStep(2)}>
              Verify
            </Button>
          </div>
          {/* <p>
            Already have Password?
            <Link to={"/login"}> Click Here to login.</Link>
          </p> */}
        </>
      ) : null}
      {formStep === 2 ? <>
        <div className="form_field">
        <TextField
              type="password"
              name="newPassword"
              fullWidth
              label="Password"
              placeholder="Enter New Password"
               
            />
        </div>
        <div className="form_field">
        <TextField
              type="password"
              name="confirmNewPassword"
              fullWidth
              label="Confirm Password"
              placeholder="Re-Enter New Password"
               
            />
        </div>
        <div className="form_field" style={{textAlign: "center"}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large" onClick={() => setFormStep(0)}>
              Submit
            </Button>
          </div>
      </> : null}
    </div>
  );
};

export default ForgotPasswordForm;
