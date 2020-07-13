import React from 'react'
import { Card, CardGroup, CardColumns, ListGroup, Button, Col, Row, Container, Form } from 'react-bootstrap';
import {  BrowserRouter as Router,  Switch,  Route,  Link,  Redirect} from "react-router-dom";

export default function Nav() {
    return (

<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>




      //   <nav className="uk-navbar-container uk-letter-spacing-small" style={{backgroundColor: ' #e8e4db59 '}}>
      //   <div className="uk-container">
      //     <div className="uk-position-z-index" data-uk-navbar>
      //       <div className="uk-navbar-left">
             
      //         <Link className="uk-navbar-item uk-logo" to="/">Kocina</Link>
      //         <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
      //           <li className="uk-active">
      //           <Link to="/">Home </Link>
      //           </li>
      //           <li>
      //            <Link to="/recipes">Recettes</Link>
      //           </li>
      //           <li>
      //           <Link to="/frigo"> Mon Frigo </Link>
      //           </li>
      //           <li>
      //           <Link to="/product">Profile</Link>
      //           </li>
      //         </ul>
      //       </div>
     
      //         <ul className="uk-navbar-nav uk-visible@m">
      //           <li><Link to="/login">Sign In</Link>
      //           </li>
      //         </ul>
      //         <div className="uk-navbar-item">
      //           <div>
      //           <Link to="/register">Sign Up</Link>
      //           </div>
      //         </div>

      //         <div className="uk-navbar-item">
      //           <div>
      //           <Link to="/details">Profil</Link>
      //           </div>
      //         </div>

      //         <a
      //           className="uk-navbar-toggle uk-hidden@m"
      //           href="#offcanvas"
      //           data-uk-toggle
      //         >
      //           <span data-uk-navbar-toggle-icon />
      //         </a>
            
      //     </div>
      //   </div>
      // </nav>
    )
}
