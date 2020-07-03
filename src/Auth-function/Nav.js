import React, { useState, useContext } from "react";
import axios from 'axios';
import ThemeContext from "./ThemeContext";
import { Link, Redirect } from "react-router-dom";
export default function Nav() {

    const { conect, updateConect } = useContext(ThemeContext);

    const Out = () => {
        localStorage.setItem("usertoken", "")
       
        localStorage.setItem("FrigoId", "")
 updateConect('')

        return <Redirect to='/' />
    }

    if (localStorage.usertoken !== "") {
        // console.log(localStorage.usertoken);

        var Connexion = (
            <>
                <button onClick={Out}><Link to="/login"> LogOut </Link></button>
                <button > <Link to="/details"> Profile </Link></button>
                <button> <Link to="/frigo">Frigo</Link> </button>
                <button> <Link to="/product">Add product</Link> </button>
                <button> <Link to="/recipe">Add recipe</Link> </button>
                <button> <Link to="/frigo/image">Add image</Link> </button>

                
            </>
        )

    } else {
        var Connexion = (
            <>
                <button><Link to="/login">SignIn</Link></button>
                <button> <Link to="/register">SignUp</Link></button>


                <button><Link to="/login1">Login1</Link></button>
                <button> <Link to="/register1">Register1</Link></button>
            </>
        )
    }

    return (
        <nav>

            <button>
                <Link to="/">Home</Link>
            </button>

            {Connexion}

        </nav>
    )
}
