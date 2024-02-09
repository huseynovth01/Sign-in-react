import React, { useState } from "react";    
import './register1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import twitter from '../../assets/twitter.png'
import google from '../../assets/google.png'

function App() {
  const initialProfileData = {
    email: '',
    password: '',
    remember: true
  };

  const validate = (name, value) => {
    const validators = {
      email: value => !value.includes("@") ? "Email must include @" : "",
      password: value => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ? "" : "Password must be at least 8 characters, including uppercase, lowercase, and number",
    };
    
    return validators[name](value);
  };
  

  const [profileDatas, setProfileDatas] = useState(initialProfileData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setProfileDatas({
      ...profileDatas,
      [name]: inputValue
    });

    const error = validate(name, inputValue);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(profileDatas).every(value => value !== '');

    if (isFormValid) {
      console.log(profileDatas);
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>

          <div className="sign" >
            <FontAwesomeIcon icon={faUser} /> 
            <h3>Sign in</h3>
            <h2>X</h2>
          </div>
          <p>Login to your account - enjoy exclsuve features & many more</p>
      <div>
        <label htmlFor="email">Email</label> 
        <br />
        <input className="input" name="email" onChange={handleChange} />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input className="input" name="password" type="password" onChange={handleChange} />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>
      <br />

      <div className="remember">
        <input className="checkbox"
          name="remember"
          type="checkbox"
          disabled={profileDatas.remember.checked}
          onChange={handleChange}
        />
        <label htmlFor="remember">Remember me</label>
        {errors.remember && <p style={{color: 'red'}}>{errors.remember}</p>}
        <a href="#">Forget Password?</a>
      </div>
      <br/>
      <button className="submit" type="submit">Sign in</button>

       <div className="uptext" >
        <h4>Don't have an account?  Sign up</h4>
       </div>
       <hr />
       <div class="social">    
            <button class="google"><img className="photo" src={google} alt="" />Google</button>
            <button class="google"><img className="photo" src={twitter} alt="" /> Twitter</button>
            
        </div>
    </form>
    
  );
}

export default App;
