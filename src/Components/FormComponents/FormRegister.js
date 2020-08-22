import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory 
} from "react-router-dom";
import kocina from '../../img/kocine.jpg'
// import { Redirect } from "react-router-dom";

export default function FormRegister() {
 
    let history = useHistory();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [c_password, setPcassword] = useState('')
  const [error, setError] = useState('')
  const [Bol, setBol] = useState(false)

 

  const SubRegister = async (e) => {

    e.preventDefault();

    await axios.post(`http://localhost:1000/api/register`, {
      name: name,
      email: email,
      password: password,
      c_password: c_password,

    }).then(function (response) {
      console.log(response.data.success[0]);
      var frigo = response.data.success[0];
      localStorage.setItem("frigoId", frigo.id)
      console.log('object');
      const resulta = response.data.success[1]
      localStorage.setItem("usertoken", resulta.token)
      localStorage.setItem("username", frigo.name)
      localStorage.setItem("userId", frigo.user_id)
      localStorage.setItem("name", resulta.name)

      console.log(localStorage.userId);

      history.push('/')
      // console.log(localStorage.usertoken);
      // setTimeout(pageRedirect(), 10000);
      // function pageRedirect() {
      //   window.location.replace("http://localhost:3000/home");
      // }
    }).catch((error) => {
      if (error.response) {
        let result = error.response.data.error
        console.log(result);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.message);

        setError(result)

      }
    });
 
  }

  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div
        className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center"
        data-uk-height-viewport
      >
        <div className="uk-width-3-4@s form" >
        <div className="uk-text-center uk-margin-bottom">
            <Link className="uk-navbar-item uk-logo" to="/"><h2  className=" title1"> FriKocina</h2> </Link>
            </div>
          <div className="uk-text-center uk-margin-medium-bottom">
            <h1 className="uk-h2 uk-letter-spacing-small  title">Créer Votre Compte </h1>
          </div>

          <form className="uk-text-center" onSubmit={(e) => SubRegister(e)} >
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="name">
              Pseudo name
              </label>
              <input
                id="name"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                value={name} onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Tom Atkins"
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email" >
                Email
                </label>
              <input
                id="email"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="email"
                placeholder="tom@company.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
         Nouveau   Mot de Passe
                </label>
              <input
                id="password"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="password"
                placeholder="Min 8 characters"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />

            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
            Confirmer le Mot de Passe
                </label>
              <input
                id="password"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="password"
                placeholder="Min 8 characters"
                value={c_password} onChange={(e) => setPcassword(e.target.value)}
              />

            </div>
            <div className="uk-width-1-1 uk-text-center">
              <button type= 'submit' className="uk-button uk-button-primary uk-button-large">
             S'inscrire 
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
            {/* <div className="uk-text-center">
              <h2 className="uk-letter-spacing-small">Welcome Back</h2>
            </div> */}
            <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
              <h2>Vous êtes déjà inscrit ? </h2> 
          <p> connectez-vous  et decouvrir les nouveaux recette que vous pouvez preparer ce soir </p>
              
              
            </div>
            <div className="uk-width-1-1 uk-text-center">
               
               <Link to="/login" className="uk-button uk-button-primary uk-button-large">   Se connecter </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
