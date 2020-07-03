import React, { useState, useContext , useEffect} from "react";
import axios from 'axios';
import ThemeContext from "./ThemeContext";
import Nav from "./Nav";

export default function Profile1() {
    const { conect, updateConect } = useContext(ThemeContext);


    const [profil, setProfil] = useState({})
    // const [frigo, setFrigo] = useState({})

    const [show, setShow] = useState(false)

    const AuthStr = 'Bearer '.concat(localStorage.usertoken);
    useEffect(() => { axios.get('http://localhost:1000/api/details', {
        headers: {
            'Authorization': AuthStr,
            'Content-Type': 'application/json'
        }
    }).then(response => {
         console.log(response.data);
       
    
     var profil = response.data.success ;
       
        setProfil(profil )
      
        setShow(true) 
      
    }).catch((error) => {
        console.log('error ' + error);
    });
 
}, []);

if (show){
  var Profile =(
        <div>
        <h1> Welcome {profil.name}  </h1>

        <p> votre Email est : {profil.email} </p>

        <p> le compte a été creer à : {profil.created_at} </p>
        <p> le frigo id : {localStorage.frigoId} </p>

    </div>
     )

}else{
    Profile = <div> Loading ...</div>
}

    return (
        <> <Nav />
            {Profile}
        </>
    )
}
