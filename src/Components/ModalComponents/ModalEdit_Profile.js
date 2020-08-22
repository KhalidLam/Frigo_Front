import React, { useContext, useState, useEffect } from 'react'
import { Button, Modal, Card, Form, FormCheck } from 'react-bootstrap';
import ThemeContext from '../LayoutsComponents/ThemeContext';
import {  EditProfile } from '../FunctionComponents/UserFunction'; 
import { Box } from "@chakra-ui/core";
import ButtonSave from '../LayoutsComponents/ButtonSave';
export default function ModalEdit_Profile(props) {

    const { render, setRendering } = useContext(ThemeContext ); 
    const [data, setData] = useState({})
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handelChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data); 
    } 
    const DataNewProfile = { 
        name: data.pseudo ,
        nom: data.nom,
        prenom: data.prenom, 
        age: data.age,
        sexe: data.sexe,
        taille: data.taille,
        poids: data.poids, 
        userId: localStorage.userId
    }
     const SubEditProfile = (e) => {
        e.preventDefault();  
        EditProfile(DataNewProfile).then(res => {
            console.log(res);
            handleClose()
       
            setRendering(!render)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    return (
        <div>
        <Form.Group className='d-flex justify-content-center profile ' >
            <Button variant="warning" className='add'onClick={handleShow } >
             Modifier mes informations
             </Button>
        </Form.Group>
            <Modal show={show} onHide={handleClose} style={{ borderRadius: '20px' }} id='modal'>

                <Card  className= 'container input'>
                    <Modal.Body  >

                        <Form className='col-12 p-4  '
                            onSubmit={(e) => SubEditProfile(e)} action=''
                            action=''>
   {props.User.profile &&
                            <Box className='row'  >
                           <Box className = 'col-6 '>
                            <Form.Group controlId="pseudo">
                                <Form.Label>  Pseudo </Form.Label>
                                <Form.Control  
                                className='input' onChange={handelChange} defaultValue={props.User.name} />
                            </Form.Group>
                            <Form.Group controlId="nom">
                                <Form.Label>  Nom </Form.Label>
                                <Form.Control  className='input' onChange={handelChange} defaultValue = {props.User.profile.nom} />
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label> Age  </Form.Label>
                                <Form.Control  
                                className='input' onChange={handelChange}  defaultValue = {props.User.profile.age}/>
                            </Form.Group> 
                           
                            <Form.Group controlId="poids">
                                <Form.Label>  Poids </Form.Label>
                                <Form.Control  type='number' 
                                className='input' onChange={handelChange} defaultValue = {props.User.profile.poids} />
                            </Form.Group>
                          
                           

                          
</Box>

                           

                            <Box className = 'col-6 '>
                             
                            <Form.Group  controlId="email">
                                <Form.Label>  Email </Form.Label>
                                <Form.Control 
                                 className='input' value={props.User.email} />
                            </Form.Group>
                          
                            <Form.Group controlId="prenom">
                                <Form.Label>  Prénom  </Form.Label>
                                <Form.Control 
                                className='input' onChange={handelChange} defaultValue = {props.User.profile.prenom} />
                            </Form.Group>
                            <Form.Group controlId="taille">
                                <Form.Label> Taille </Form.Label>
                                <Form.Control type='number'
                                 className='input' onChange={handelChange} defaultValue = {props.User.profile.taille} />
                            </Form.Group>
                            
                            <Form.Label> Sexe  </Form.Label>
                            <Form.Group controlId="sexe"
                            className='d-flex justify-content-around'>
                                <div className='d-flex'> 
                                 <FormCheck  
                                 name='sexe' type='radio'
                                 className='input' value='Femme' onChange={handelChange} />
      Femme </div>
                                <div className='d-flex' >
                                 <FormCheck  
                                  name='sexe' type='radio' className='input' value='Homme' onChange={handelChange} />
      Homme </div>
                            </Form.Group>
                            </Box>
                            
                            </Box>

                            }
                             <ButtonSave   color = 'btn-warning' text = 'Save'/>
                        </Form>
                    </Modal.Body>
                </Card>
            </Modal>

        </div>
    )
}
