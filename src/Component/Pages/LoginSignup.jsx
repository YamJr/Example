import React from "react";
import "./Pages.css";
import { useState } from "react";

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
  });

  //for showPassword
  //   const [showPassword, setShowPassword] = useState(false);
  //   const handleShowPassword = () => {
  //     setShowPassword(!showPassword);
  //   };

  // const handleForgetPassword=() =>{
  //     console.log('forget Password');
  // }

  const handleSignUp = () => {
    console.log("sign up");
  };
  const [formErrors, setFormErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted with data:", formData);
    } else {
      console.log("Form submittion failed due to validation error:", formData);
    }
  };

    const validateForm = ()=>{
      let errors ={};
      let isValid = true; 

      //username validation
      if(!formData.username.trim()){
        errors.username='Username is required';
        isValid = false;
      }

      //email validation
      if(!formData.email.trim()){
        errors.email = 'Email is required';
        isValid= false;
      }
      else if(!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email = 'Email is invalid';
        isValid = false;
      }

      //password validation
      if(!formData.password || !formData.password.trim()){
        errors.password ='Password is required';
        isValid= false;
      }
      else if(formData.password.length < 6){
        errors.password = 'Password must be at least 6 characters';
        isValid= false;
      }

      //for confirm password
      if(!formData.confirmPassword ||!formData.confirmPassword.trim()){
        errors.confirmPassword = 'Confirm Password is required';
        isValid=false;
      }
      else if(formData.password !== formData.confirmPassword){
          errors.confirmPassword= 'Password do not match';
          isValid= false;
      }
      isValid=!formData.confirm;
      setFormErrors(errors);
      return isValid;
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="form__container">
      <h1 className="header">sign up</h1>
      <form onSubmit={handleSubmit}>
        <label className="label__style">
          username
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Enter Username"
            className="input__style"
          />
           {formErrors.username && (
          <span className="error__style">{formErrors.username}</span>
        )}
        </label>
        <br/>
        <label className="label__style">
          email
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            className="input__style"
            onChange={handleChange}
          />
          {formErrors.email&& <span className="error__style">{formErrors.email}</span>}
        </label>
        <br />
        <label className="label__style">
          password
          <input
            // type={showPassword ? "text" : "password"}
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            className="input__style"
            onChange={handleChange}
          />
          {formErrors.password&&<span className="error__style">{formErrors.password}</span>}
        </label>
        <br />
        <label className="label__style">
          confirm password
          <input
            // type={showPassword ? "text" : "password"}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Enter Confirm Password"
            className="input__style"
            onChange={handleChange}
          />
        {formErrors.confirmPassword &&<span className="error__style">{formErrors.confirmPassword}</span>}
        </label>
        <br />
        {/* <p onClick={handleForgetPassword} className="forget__style">forget password?</p> */}
        {/*show password with check box */}
        {/* <label className="label__check">
        <input type="checkbox" onChange={handleShowPassword} />
          show Password
        </label> */}
        <button type="submit" className="signup__btn">
          sign up
        </button>
        <p className="mem__style">
          Already have account?{" "}
          <span onClick={handleSignUp} className="signup__style">
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;
