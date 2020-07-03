
import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  ButtonGroup,
} from "@chakra-ui/core";
import { Formik, Field } from 'formik';
import ThemeContext from "./ThemeContext";
import { Redirect } from "react-router-dom";
import Nav from "./Nav";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,useDisclosure
} from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import {AddProductFrigo} from "../Components/FrigoFunction" ;

function Login1(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [Bol, setBol] = useState(false)


  // const history = this.props
  const SubLogin = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:1000/api/login`,{
    email :email,
    password: password
    })
      // .then((res) => {
      //   // console.log(res.data);
      //   setError(res.status)

      //   return res.data


      // })
      .then((res) => {
        // console.log(data)
        const resulta =  res.data.success[1] 
        var frigo=  res.data.success[0];
        localStorage.setItem("frigoId", frigo.id )
        console.log(resulta)
       console.log(frigo);
        localStorage.setItem("usertoken", resulta.token)
        setBol(true)
        setTimeout(pageRedirect(), 10000);
        function pageRedirect() {
          window.location.replace("http://localhost:3000/frigo");
        }
      }).catch((error) => {
        if (error.response) {
          let result = error.response.data.error
          console.log(result);
          console.log(error.response.status);
          console.log(error.response.headers);
          setError(result)

        }
      });
  }

 
    const { isOpen, onOpen, onClose } = useDisclosure();

  const handelEvent = ()=>{
AddProductFrigo().then((res)=>{
  console.log('.....ferfer')
}

)
  }

  if (localStorage.usertoken !== "") {
    return <Redirect to='/' />
  } else {
    return (
      <>
      
        <Nav />

 
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          hello
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick = {handelEvent} >Ajouter</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   
  );
}
        <Button >Button</Button>
        <div className='col-4 container' style={{ backgroundColor: '#00c4ffb0' }}>
          <h2  >Sign-In</h2>
          <form onSubmit={(e) => SubLogin(e)} >
            <div className="form-group col-md-10">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group col-md-10">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
         
          </form>

        </div>

        {/* <Button variantColor="green">Button</Button> */}
        {/* <ButtonGroup spacing={4}>
  <Button isLoading variantColor="teal" variant="solid">
    Email
  </Button>
  <Button
    isLoading
    loadingText="Submitting"
    variantColor="teal"
    variant="outline"
  >
    Submit
  </Button>
</ButtonGroup> */}
      </>

    )
  }

}

export default Login1
