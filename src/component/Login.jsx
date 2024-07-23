import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()  {
  const [logins, setLogins] = useState({ email: "", password: "", message: "" });
  const nav = useNavigate()

  async function handleLogin () {
    let response = await fetch(
      `https://react-server-k2ig.onrender.com/users?email=${logins.email}&password=${logins.password}`,
      { method: "GET" }
    );

    let body = await response.json();
    console.log (body);

    if (body.length > 0) {
      //if success
      
      setLogins({
        message: <span className="text-success">Login successful</span>,
      });
      nav("/shopping")
    } else {
      //if  error
      setLogins({
        message: (
          <span className="text-danger">
            Login Unsuccessful, please try again
          </span>
        ),
      });
    }
  };

   
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-g-6 col-md-8 col-sm-10 p-4 rounded shadow">
          <h4 className="text-center text-2xl font-bold mb-4">Welcome to E-Kart</h4>

          <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={logins.email}
            onChange={(event) => {
              setLogins({ ...logins, email: event.target.value });
            }}
          />
          </div>

          <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={logins.password}
              onChange={(event) => {
                setLogins({ ...logins, password: event.target.value });
              }}
            />
          </div>

          <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={logins.password}
              onChange={(event) => {
                setLogins({ ...logins, password: event.target.value });
              }}
            />
          </div>

          <div className="text-center mb-3">
            <span>{logins.message}</span>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary px-4 " onClick={() => {handleLogin()}}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  

export default Login;