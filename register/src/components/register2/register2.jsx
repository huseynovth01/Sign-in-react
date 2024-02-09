import React, { useState } from "react";    
import './register2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import twitter from '../../assets/twitter.png'
import google from '../../assets/google.png'

function App() {
    const validate = (name, value) => {
        let error = "";
      
        switch (name) {
          case "fullname":
            if (value.length < 3) {
              error = "Fullname must be at least 3 characters";
            }
            break;
          case "email":
            if (!value.includes("@")) {
              error = "Email must include @";
            }
            break;
          case "password":
            let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if (!regex.test(value)) {
              error =
                "Password must be at least 8 characters, including uppercase, lowercase and number";
            }
            break;
          default:
            break;
        }
        return error;
      };
    
      const [profileDatas, setProfileDatas] = useState({
        fullname: '',
        email: '',
        password: '',
        remember: true
      })
    
      const [errors, setErrors] = useState({
        fullname: "",
        email: "",
        password: "",
        remember: true,
      });
    
      const handleChange = (e) => {
        e.preventDefault()
        const { name, type, checked, value } = e.target;
    
        setProfileDatas({
          ...profileDatas,
          [name]: type === 'checkbox' ? checked : value
        })
        const error = validate(name, value)
        setErrors({
          ...errors,
          [name]: error
        })
    
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
    
        if (
          profileDatas.fullname.length > 0 &&
          profileDatas.email.length > 0 &&
          profileDatas.password.length > 0 
        ) {
          console.log(profileDatas);
        } else {
          console.log("Form is invalid");
        }
    
      }

  return (
    <form className="container-2" onSubmit={handleSubmit}>

          <div className="sign" >
            <FontAwesomeIcon icon={faUser} /> 
            <h3>Sign Up</h3>
            <h2>X</h2>
          </div>
          <p>Register to Mamba - enjoy exclusive features & many more</p>
          <div>
        <label htmlFor="fullname">Fullname: </label>
        <input className="input" placeholder="Enter your full name" name="fullname" 
        />
        {errors.fullname && <p style={{color: 'red'}} >{errors.fullname}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="email">Email</label> 
        <br />
        <input className="input" placeholder="Enter your email" name="email" onChange={handleChange} />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input className="input" placeholder="Enter your password" name="password" type="password" onChange={handleChange} />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>
      <br />

      <div className="Iagree">
        <input className="checkbox"
          name="remember"
          type="checkbox"
          disabled={profileDatas.remember.checked}
          onChange={handleChange}
        />
        <label htmlFor="remember">I agree to </label>
        <a className="iagree" href="">Terms & Conditions</a>

        {errors.remember && <p style={{color: 'red'}}>{errors.remember}</p>}
      </div>
      <br/>
      <button className="submit" type="submit">Sign Up</button>

       <div className="uptext" >
        <h4>Already have an ccount? Sign in</h4>
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
