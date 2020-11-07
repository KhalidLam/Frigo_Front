import React, { useState, useContext, useEffect } from "react";
import { Card, CardGroup, CardColumns, ListGroup, Button, Col, Row, Container, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { getProfile  } from '../FunctionComponents/UserFunction';
import background from "../../img/background2.jpg"
export default function Nav() {
  

  const Out = () => {
    localStorage.setItem("usertoken", "")
    localStorage.setItem("userId", "")
    localStorage.setItem("FrigoId", "") 
    localStorage.setItem('iconId' ,[])
    localStorage.setItem('name'  , 'profile')

}
  if (localStorage.usertoken == "") {
    var  Nav = (
<>
       <Link className="uk-navbar-item uk-logo" to="/"><h2  className=" title1"> FriKocina </h2>   </Link>
       <div className="uk-container">
     <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
       <li className="uk-active">
         <Link to="/"><h2  className=" title2"> Accueil  </h2> </Link>
       </li>
   
       <li><Link to="/login"> <h2 className=" title2"> Se connecter </h2> </Link>
       </li>
       <li>
         <Link to="/register"> <h2  className=" title2"> S'inscrire </h2> </Link>
       </li>
     </ul>
     </div>
     </>
   )
  }else{
 var Nav = (
 <>
 <Link className="uk-navbar-item uk-logo" to="/"><h2   > FriKocina</h2> </Link>
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
      <h2  className=" title2"> {localStorage.name}  </h2>  
       <div style = {{width : '40px' , marginLeft : '12px'}}> 
       
       <img src={`http://localhost:1000/${localStorage.avatar}`}
        style = {{borderRadius : '50%', width : '85%' }} alt=""/>   
      
      </div>
       </Link>
     <ul className="dropdown-content text-center">

       <li>
         <Link to="/profile">  <h2  className=" title3">Mon Profile </h2>   </Link></li>
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

   
  
    <nav id = 'nav' className="uk-navbar-container uk-letter-spacing-small"
     
      > 
      {/* opacity : 0.5 */}
      <div className="uk-container">
       
        <div className="d-flex justify-content-between" 
        style = {{backgroundColor: "white", borderRadius: '60px' ,  paddingLeft: "5px" }} >

 {Nav}
        </div>
        </div>
     
    </nav>
  )
}
