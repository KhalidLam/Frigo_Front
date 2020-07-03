import React, { useState, useContext, Profiler } from "react";

import ThemeContext from "./ThemeContext";
import { Redirect } from "react-router-dom";
import Nav from "./Nav";
export default function Home1() {

    const { conect, updateConect } = useContext(ThemeContext);

console.log(localStorage.usertoken);

     if (localStorage.usertoken){
  

        return (
            <> 
            <Nav />

            <h1> Hi {conect} </h1>
            <h1 className ='container' >  Welcome in my siteWeb </h1> 
        </> 

        )

     }else{
         return(
            <> 

            <Nav />
            <h1 className ='container' >  Welcome in my siteWeb </h1> 
        </> 
         )

     }


        


    
}
