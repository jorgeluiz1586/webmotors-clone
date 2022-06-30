import "../assets/css/style.css";
import axios from "axios";
import { useState } from "react";

const SignUpPage = () => {
  let [user, setUser] = useState({
    first_name: null,
    last_name: null,
    age: null,
    phone: null,
    email: null,
    password: null,
    password_confirmation: null,
  });

  const register = () => {
    axios.post("http://localhost:8080/auth/signup", { ...user })
  }

  return (
    <>
      <div className="auth-page">
        <h1 className="page-title">Register</h1>
        <div className="form">
          <input className="text-field" type="text" placeholder="First Name" onChange={(event) => setUser(prev => ({ ...prev, first_name: event.target.value}))} value={user.first_name}/>
          <input className="text-field" type="text" placeholder="Last Name" onChange={(event) => setUser(prev => ({ ...prev, last_name: event.target.value}))} value={user.last_name}/>
          <input className="text-field" type="date" placeholder="Age" onChange={(event) => setUser(prev => ({ ...prev, age: event.target.value}))} value={user.age}/>
          <input className="text-field" type="text" placeholder="Phone" onChange={(event) => setUser(prev => ({ ...prev, phone: event.target.value}))} value={user.phone}/>
          <input className="text-field" type="text" placeholder="E-mail" onChange={(event) => setUser(prev => ({ ...prev, email: event.target.value}))} value={user.email}/>
          <input className="text-field" type="text" placeholder="Password" onChange={(event) => setUser(prev => ({ ...prev, password: event.target.value}))} value={user.password}/>
          <input className="text-field" type="text" placeholder="Password Confirmation" onChange={(event) => setUser(prev => ({ ...prev, password_confirmation: event.target.value}))} value={user.password_confirmation}/>
          <button className="button-register" onClick={register}>Register</button>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;