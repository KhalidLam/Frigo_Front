
import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
export default function FormLogin(props) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [Bol, setBol] = useState(false)


  // const history = this.props
  const SubLogin = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:1000/api/login`,{
    email :email,
    password: password
    })
      .then((res) => {
        const resulta =  res.data.success[1] 
        var frigo=  res.data.success[0];
        localStorage.setItem("frigoId", frigo.id )
        console.log(resulta)
       console.log(frigo);
        localStorage.setItem("usertoken", resulta.token)
        // setTimeout(pageRedirect(), 10000);
        // function pageRedirect() {
        // window.location.replace("http://localhost:3000/frigo");
        // }
     props.history.push('/frigo')

      }).catch((error) => {
        if (error.response) {
          let result = error.response.data.error
          console.log(result);
          console.log(error.response.status);
          console.log(error.response.headers);
          setError(result)

        }
      });
  }
    return (
        <>
        <div className="uk-grid-collapse" data-uk-grid>
        <div
          className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center"
          data-uk-height-viewport
        >
          <div className="uk-width-3-4@s">
            <div className="uk-text-center uk-margin-bottom">
              <a className="uk-logo uk-text-primary uk-text-bold" href="index.html">
                Kocina
              </a>
            </div>
            <div className="uk-text-center uk-margin-medium-bottom">
              <h1 className="uk-h2 uk-letter-spacing-small">Sign In to Kocina</h1>
            </div>
            <div className="uk-text-center uk-margin">
              <p className="uk-margin-remove">Or use your email account:</p>
            </div>
            <form className="uk-text-center"  onSubmit={(e) => SubLogin(e)}>
              <div className="uk-width-1-1 uk-margin">
                <label className="uk-form-label" htmlFor="email"  
                 >
                  Email
                </label>
                <input
                  id="email"
                  className="uk-input uk-form-large uk-border-pill uk-text-center"
                  type="email"
                  placeholder="tom@company.com"
                  value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="uk-width-1-1 uk-margin">
                <label className="uk-form-label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className="uk-input uk-form-large uk-border-pill uk-text-center"
                  type="password"
                  placeholder="Min 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="uk-width-1-1 uk-margin uk-text-center">
                <a className="uk-text-small uk-link-muted" href="#">
                  Forgot your password?
                </a>
              </div>
              <div className="uk-width-1-1 uk-text-center">
                <button type = 'submit' className="uk-button uk-button-primary uk-button-large">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light"
          data-uk-height-viewport
        >
          <div
            className="uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-overlay 
      uk-border-rounded-large uk-width-1-1 uk-height-xlarge uk-flex uk-flex-middle uk-flex-center"
            style={{ backgroundImage: "url(https://via.placeholder.com/600x700)" }}
          >
            <div className="uk-padding-large">
              <div className="uk-text-center">
                <h2 className="uk-letter-spacing-small">Hello There, Join Us</h2>
              </div>
              <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
                <p>Enter your personal details and join the cooking community</p>
              </div>
              <div className="uk-width-1-1 uk-text-center">
                <a
                  href="sign-up.html"
                  className="uk-button uk-button-primary uk-button-large"
                >
                 <Link to="/register">SignUp</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
