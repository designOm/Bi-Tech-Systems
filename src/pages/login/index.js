import React from "react";
import { useParams } from "react-router";
import loginBg from "../../assets/common/6997-min.jpg";
import logo from "../../assets/common/logo.png";
import ForgotPasswordForm from "./ForgotPasswordForm";

import "./index.scss";
import LoginForm from "./loginForm";
const Login = (props) => {
    let { formType } = useParams();
  return (
    <div className="loginPage">
      <div
        className="loginPage__left"
        style={{backgroundImage: `url(${loginBg})`}}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="loginPage__right">
          {formType === 'forgotPassword' ? <ForgotPasswordForm /> :  <LoginForm />}
       
      </div>
    </div>
  );
};

export default Login;
