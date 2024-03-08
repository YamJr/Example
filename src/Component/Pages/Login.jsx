import React, { useState } from 'react'
import './Pages.css'


const Login = () => {
    const [formData, setFormData]  = useState(
        {
            username:'',
            password:''
        }
    );
const [showPassword, setShowPassword] = useState(false);
const handleShowPassword = () => {
        setShowPassword(!showPassword);
       };
  
    const handleForgetPassword=() =>{
        console.log('forget Password');
    }
  
    const [error, setErrors] = useState({
        username:'',
        password:''
    });
    const handleChange=(e) =>{
            const {name ,value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
    };
    const handleSubmit = (e)=>{
            e.preventDefault();
            const validationError = validateForm(formData);
            setErrors(validationError);

             if (!Object.values(validationError).some((error) => error)) {
                console.log('login successful');
            }
    };
    const validateForm = ({ username, password }) => {
        let validationErrors = {
          username: '',
          password: '',
        };
        if (!username) {
            validationErrors.username = 'Username is required';
          }
      
          if (!password) {
            validationErrors.password = 'Password is required';
          }
          return validationErrors;
    };
    
  return (
    <div className='form__container'>
        <h1 className='header'>Login</h1>
        <form onSubmit={handleSubmit}>
        <label className="label__style">
          username
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter username"
            required
            className="input__style"
            onChange={handleChange}
          />
          {error.username && (
            <span className="error__style">{error.username}</span>
          )}
        </label>
        <br />
        <label className="label__style">
          password
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            required
            className="input__style"
            onChange={handleChange}
          />
          {error.password && (
            <span className="error__style">{error.password}</span>
          )}
        </label>
         { <p onClick={handleForgetPassword} className="forget__style">forget password?</p> }
         <label className="label__check">
        <input type="checkbox" onChange={handleShowPassword}
        className='check__style'/>
          show Password
        </label> 
        <br />
        <button type="submit" className="login__btn">
          login
        </button>
        </form>
    </div>
  )
}

export default Login