import React from 'react'
import {  BrowserRouter as Router,  Switch,  Route,  Link,  Redirect} from "react-router-dom";
export default function Nav() {
    return (
        <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
             
              <Link className="uk-navbar-item uk-logo" to="/">Kocina</Link>
              <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                <li className="uk-active">
                <Link to="/">Home </Link>
                </li>
                <li>
                 <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                <Link to="/frigo"> Frigo </Link>
                </li>
                <li>
                <Link to="/product">addproduct</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <div>
                <a className="uk-navbar-toggle" data-uk-search-icon href="#" />
                <div
                  className="uk-drop uk-background-default"
                  data-uk-drop="mode: click; pos: left-center; offset: 0"
                >
                  <form className="uk-search uk-search-navbar uk-width-1-1">
                    <input
                      className="uk-search-input uk-text-demi-bold"
                      type="search"
                      placeholder="Search..."
                      autofocus
                    />
                  </form>
                </div>
              </div>
              <ul className="uk-navbar-nav uk-visible@m">
                <li><Link to="/login">Sign In</Link>
                </li>
              </ul>
              <div className="uk-navbar-item">
                <div>
                <Link to="/register">Sign Up</Link>
                </div>
              </div>

              <div className="uk-navbar-item">
                <div>
                <Link to="/details">Profil</Link>
                </div>
              </div>

              <a
                className="uk-navbar-toggle uk-hidden@m"
                href="#offcanvas"
                data-uk-toggle
              >
                <span data-uk-navbar-toggle-icon />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}
