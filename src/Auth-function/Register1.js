import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';
import ThemeContext from "./ThemeContext";

import { Redirect } from "react-router-dom";
import Nav from "./Nav";

export default function Register1() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setPcassword] = useState('')
    const [error, setError] = useState('')
    const [Bol, setBol] = useState(false)

    const { conect, updateConect } = useContext(ThemeContext);

  const  SubRegister =  async (e) => {

        e.preventDefault();

     await  axios.post(`http://localhost:1000/api/register`,{
        name:name,
        email:email,
        password : password,
        c_password:c_password,

     }).then(function (response) {
                console.log(response.data.success[0]);

                var frigo=  response.data.success[0];
                localStorage.setItem("frigoId", frigo.id )
                console.log('object');
                const resulta = response.data.success[1]
                localStorage.setItem("usertoken", resulta.token)
              
                console.log(localStorage.usertoken);
                setBol(true)
            }).catch((error) => {
                if (error.response) {
                    let result = error.response.data.error
                    console.log(result);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    setError(result)

                }
            });

           
            updateConect(  name )
    }
    var div = (<div> Something is Wrong {error}</div>)
    const form = (
        <form  onSubmit={(e) => SubRegister(e)} >
            <div className="form-group col-md-10">
                <label htmlFor="inputEmail4"> Name </label>
                <input type="text" className="form-control" id="inputname4" placeholder="Email"
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group col-md-10">
                <label htmlFor="inputEmail4"> E-mail </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group col-md-10">
                <label htmlFor="inputPassword4">  Password  </label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            
            <div className="form-group col-md-10">
                <label htmlFor="inputPassword4">  Confirme Password  </label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm_Password"
                    value={c_password} onChange={(e) => setPcassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">   Register  </button>
        </form>

    )
    if (Bol) {
        return <Redirect to='/' />
    } else if (error !== '') {
        return (
            <>
                <Nav />
                <div  className='col-4 container' style={{backgroundColor : '#00c4ffb0'}}>
                <h2  >Sign-Up</h2>
                {form}
                {div}
                </div>
             
            </>
        )
    } else if(password !== c_password){
        var err = <div> les mot de passe sont différents </div> 
        return (
            <>
                <Nav />
                <div className='col-4 container' style={{backgroundColor : '#00c4ffb0'}}>
                <h2 className='container' >Sign-Up</h2>
                {form}
                {err}
                </div>
            </>
        )
    }else {

        return (
        <>
            <Nav />
            <div className='col-4 container' style={{backgroundColor : '#00c4ffb0'}}>
                <h2 className='container' >Sign-Up</h2>
            {form}
            </div>
        </>
        )
    }
}
