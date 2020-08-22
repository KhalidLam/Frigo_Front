import React, { useState, useEffect, useContext } from 'react'
import {  ListGroupItem, ListGroup, Form,  Card, FormCheck, Spinner } from 'react-bootstrap';
import { getProfile  } from './FunctionComponents/UserFunction';
import Nav from './LayoutsComponents/Nav'
import ModalEdit_Profile from './ModalComponents/ModalEdit_Profile'
import ThemeContext from './LayoutsComponents/ThemeContext'
import ModalEdit_Avatar from './ModalComponents/ModalEdit_Avatar';
import { Box } from "@chakra-ui/core";
import SpinnerLoading from './LayoutsComponents/SpinnerLoading';

export default function EditProfile1() {
  const { render, setRendering } = useContext(ThemeContext );
  const [User, setUser] = useState({}) 
 const [Show, setShow] = useState(false)

  useEffect(() => {
    getProfile().then(res => {
      console.log(res.data.success); 
      setUser(res.data.success)
      console.log(res.data.success.profile);
      console.log(res.data.success.profile.prenom);
      console.log(res.data.success.profile.nom);
 setShow(true)
    }).catch((err) => {
      console.log(err.message);
    })
console.log(localStorage.lolo)
  }, [render])

  var dateFormat = require('dateformat');
  return (
    <>

      <Nav />
      <Card className='container p-3   col-6' >
      {
        Show ?
      
 <>
        <Card.Title className = 'text-center title '  >  
        le profile de   {'<<' + User.name + '>>'}  
        </Card.Title> 
        <div className='container d-flex justify-content-around row no-gutters pt-5'>
          <div class="col-md-4 " >
            <Card.Img className='mt-5 ml-2' style={{ width: "250px" }} src={`http://localhost:1000/${User.avatar}`} />
            <ModalEdit_Avatar  User = {User} />  
          </div>

          <div class="col-md-8">
            <ListGroup className="list-group-flush ml-3 px-4">
              <ListGroupItem> <span className = 'p-3'> Pseudo :</span>  {User.name} </ListGroupItem>
              {User.profile &&
                <> 
                  <ListGroupItem> <span className = 'p-3'> Prénom : </span> {User.profile.prenom} </ListGroupItem>
                  <ListGroupItem> <span className = 'p-3'>  Sexe :</span> {User.profile.sexe} </ListGroupItem>

                  <ListGroupItem> <span className = 'p-3'> Nom :</span> {User.profile.nom} </ListGroupItem>
                  <ListGroupItem> <span className = 'p-3'> Email : </span> {User.email} </ListGroupItem>
                  <ListGroupItem> <span className = 'p-3'>  Age :</span> {User.profile.age && User.profile.age + ' ans ' } </ListGroupItem>
                  <ListGroupItem> <span className = 'p-3'> Tille : </span>{User.profile.taille && User.profile.taille  + ' cm' }   </ListGroupItem>
                  <ListGroupItem><span className = 'p-3'>   Membre depuis : </span>{dateFormat( User.profile.created_at, " mmmm d, yyyy ")}</ListGroupItem>
                </>
              }
                <ModalEdit_Profile User = {User} />
            </ListGroup>
          </div>
        </div>


</> :  <SpinnerLoading animation = 'border' /> 
}
      </Card>
   
        





    </>
  );
}



