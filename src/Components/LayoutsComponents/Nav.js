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
       <Link className="uk-navbar-item uk-logo" to="/"><h2  className=" title1"> Kocina </h2>   </Link>
       <div className="uk-container">
     <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
       <li className="uk-active">
         <Link to="/">Home </Link>
       </li>
   
       <li><Link to="/login"> <h2  className=" title1">  Sign In</h2> </Link>
       </li>
       <li>
         <Link to="/register"> <h2  className=" title1"> Sign Up</h2> </Link>
       </li>
     </ul>
     </div>
     </>
   )
  }else{
 var Nav = (
 <>
 <Link className="uk-navbar-item uk-logo" to="/"><h2  className=" title1"> Kocina </h2> </Link>
 <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left "  >
   <li className=" title">
   {/* uk-active */}
     <Link to="/"> <h2  className=" title2"> Accueil </h2> </Link>
   </li>

   <li >
     <Link to="/Recettes"> <h2  className=" title2"> Recettes  </h2> </Link>
   </li>
   <li className=" title">
     <Link to="/frigo"> <h2  className=" title2">  Mon Frigo </h2>   </Link>
   </li>

 </ul>

 <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">

   <li className="dropdown"  >


     <Link to="/profile">
      <h2  className=" title2"> Profile   </h2> 
       </Link>
     <ul className="dropdown-content">

       <li>
         <Link to="/details">  <h2  className=" title3">Mon Profile </h2>   </Link></li>
       <li>
         <Link to="/liste"> <h2  className=" title3"> Ma liste </h2> </Link>
       </li>
       <li> <Link to="/MesRecettes">  <h2  className=" title3">Mes recettes </h2>   </Link> </li>
       <li> <Link   to="/favoris"> <h2  className=" title3"> Mes favoris  </h2>  </Link> </li>
       <li> <Link  onClick={Out} to="/"  >  <h2  className=" title3">  LogOut  </h2> </Link> </li>
       

     </ul>
   </li>
 </ul>

</>
 )
  }


  return (

   
  
    <nav className="uk-navbar-container uk-letter-spacing-small"
     style ={{ backgroundImage: "url('http://localhost:1000/image/background2.jpg')" }} >
      {/* opacity : 0.5 */}
      <div className="uk-container">
       
        <div className="d-flex justify-content-between"  >

 {Nav}
        </div>
        </div>
     
    </nav>
  )
}
