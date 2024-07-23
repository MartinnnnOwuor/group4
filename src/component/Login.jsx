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
      <div className="col-lg-9 m-3 p-2" >
        <h4 className="text-center text-2xl font-bold mb-4">Welcome to E-Kart</h4>

        {/* Beginning of the Email */}
        <div className="form-group form row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={logins.email}
            onChange={(event) => {
              setLogins({ email: event.target.value });
            }}
          />
        </div>
        {/* End of Email */}

        {/* Beginning of the Password */}
        <div className="form-group form row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={logins.password}
            onChange={(event) => {
              setLogins({ password: event.target.value });
            }}
          />
        </div>
        {/* End of Password */}

        <div className="d-flex justify-content-center">
          <span className="m-3 ">{logins.message}</span>

          <button className="btn btn-primary m-2 px-4 " onClick={() => {handleLogin()}}>
            Login
          </button>
        </div>
      </div>
    );
  }

  //Fires when user clicks on Login button
  


export default Login;
