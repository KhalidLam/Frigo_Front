
import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';
import kocina from '../../img/kocine.jpg'
// import kocina from '../../img/cuisine.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect ,
   useHistory  
} from "react-router-dom";
export default function FormLogin( ) {
  let history = useHistory();
 
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
        localStorage.setItem("username", frigo.name)
        localStorage.setItem("userId", frigo.user_id)
        localStorage.setItem("name", resulta.name)

        console.log(localStorage.userId);
        
        // setTimeout(pageRedirect(), 10000);
        // function pageRedirect() {
        // window.location.replace("http://localhost:3000/frigo");
        // }
      history.push('/')

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
          <div className="uk-width-3-4@s form">
            <div className="uk-text-center uk-margin-bottom">
            <Link className="uk-navbar-item uk-logo" to="/"><h2  className=" title1"> FriKocina</h2> </Link>
            </div>
            <div className="uk-text-center uk-margin-medium-bottom">
              <h1 className="uk-h2 uk-letter-spacing-small title">Connectez-vous à FriKocina</h1>
            </div>
           
            <form className="uk-text-center  "  onSubmit={(e) => SubLogin(e)}>
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
               Mot de passe
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
              {/* <div className="uk-width-1-1 uk-margin uk-text-center">
                <a className="uk-text-small uk-link-muted" href="#">
                  Forgot your password?
                </a>
              </div> */}
              <div className="uk-width-1-1 uk-text-center">
                <button type = 'submit' className="uk-button uk-button-primary uk-button-large">
                Se connecter
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
            style={{ backgroundImage: `url(${kocina})`, backgroundSize: '100%'   }}
          >
            <div className="uk-padding-large">
              <div className="uk-text-center">
                <h2 className="uk-letter-spacing-small"> Bonjour, ^_^ </h2>
              </div>
              <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
            
              <p> Vous ne savez pas quoi faire à manger ce soir? </p>
              <p>L’application  « Frikocina » est faîte pour vous ! Rejoignez-nous</p>   
            
              </div>
              <div className="uk-width-1-1 uk-text-center">
               
                 <Link to="/register" className="uk-button uk-button-primary uk-button-large">   S'inscrire </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
