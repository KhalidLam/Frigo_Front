import React, { useState, useContext } from "react";
import axios from 'axios';
import ThemeContext from "./ThemeContext";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
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
                <Button onClick={Out}><Link to="/login"> LogOut </Link></Button>
                <Button > <Link to="/details"> Profile </Link></Button>
                <Button ><Link to="/frigo">Frigo</Link> </Button>
                <Button > <Link to="/product">Add product</Link> </Button>
                <Button > <Link to="/recipe"></Link>addrecipe </Button>
                <Button > <Link to="/frigo/image">Add image</Link> </Button>

                {/* <Button > <Link to="/frigo1">Frigo1</Link></Button> */}

                <Button> <Link to="/addrecette">add recette</Link></Button>
                <Button> <Link to="/addrecipe">AddProductToRecipe </Link></Button>

               
            </>
        )

    } else {
        var Connexion = (
            <>
                <Button Button>  <Link to="/login">SignIn</Link>  </Button>
                <Button Button> <Link to="/register">SignUp</Link></Button>


                <Button><Link to="/login1">Login1</Link></Button>
                <Button> <Link to="/register1">Register1</Link></Button>
            </>
        )
    }

    return (
        <nav>

            <Button>
                <Link to="/">Home</Link>
            </Button>

            {Connexion}

        </nav>
    )
}
