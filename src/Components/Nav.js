import React, { useState, useContext } from "react";
import { Card, CardGroup, CardColumns, ListGroup, Button, Col, Row, Container, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ThemeContext from "./ThemeContext";

export default function Nav() {
  const { conect, updateConect } = useContext(ThemeContext);
  
  const Out = () => {
    localStorage.setItem("usertoken", "")
    localStorage.setItem("userId", "")
    localStorage.setItem("FrigoId", "") 
    localStorage.setItem('iconId' ,[])

}
  if (localStorage.usertoken == "") {
    var  Nav = (
<>
       <Link className="uk-navbar-item uk-logo" to="/">Kocina</Link>
       <div className="uk-container">
     <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
       <li className="uk-active">
         <Link to="/">Home </Link>
       </li>
   
       <li><Link to="/login">Sign In</Link>
       </li>
       <li>
         <Link to="/register">Sign Up</Link>
       </li>
     </ul>
     </div>
     </>
   )
  }else{
 var Nav = (
 <>
 <Link className="uk-navbar-item uk-logo" to="/">Kocina</Link>
 <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
   <li className="uk-active">
     <Link to="/">Home </Link>
   </li>

   <li>
     <Link to="/Recettes">Recettes</Link>
   </li>
   <li>
     <Link to="/frigo"> Mon Frigo </Link>
   </li>

 </ul>

 <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">

   <li className="dropdown">


     <Link to="/details"> Profile </Link>
     <ul className="dropdown-content">

       <li>
         <Link to="/details"> Mon Profile </Link></li>
       <li>
         <Link to="/liste"> Ma liste </Link>
       </li>
       <li> <Link to="/MesRecettes"> Mes recettes </Link> </li>
       <li> <Link  onClick={Out} to="/"  > LogOut </Link> </li>
       <li> <Link  > SingleRecette </Link> </li>

     </ul>
   </li>
 </ul>

</>
 )
  }


  return (

   
  
    <nav className="uk-navbar-container uk-letter-spacing-small" >
      <div className="uk-container">
        {/* <div className="uk-position-z-index" data-uk-navbar> */}
        <div className="d-flex justify-content-between">

 {Nav}
        </div>
      </div>

    </nav>
  )
}
