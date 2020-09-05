import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import{ getAllProduct ,AddProductFrigo, }from "../FunctionComponents/FrigoFunction" ;
import { Form, Button, Container } from "react-bootstrap";
import { Box } from "@chakra-ui/core";
// import { RenderingContext } from "../../Auth-function/Auth"; 
import ThemeContext from "../LayoutsComponents/ThemeContext";
import Select from 'react-select'
export default function ModelAddProduct() {

  const { render, setRendering } = useContext(ThemeContext) ;
  const [allProduct, setProduct] = useState([]) 
  const [data, setData] = useState({}) 
  const [options, setOptions] = useState([])


  useEffect(  () => {
    getAllProduct().then(response => {
      console.log(response.data.success);
      setProduct(response.data.success)
      response.data.success.map((product) => { options.push(  { value: product.id , label: product.name })  })
    }).catch((error) => {
      console.log('error ' + error);
    });
  },[]);


  const handelChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
    console.log(data);
  }


  const DataProductFrigo =
  {
    productId: data.product,
    quantity: data.quantity,
    frigoId: localStorage.frigoId,
    type: data.type
  }
  const SubAdd = async (e) => { 
    e.preventDefault(); 
// const selectedIndex = target.options.selectedIndex
//  var key = target.options[selectedIndex].getAttribute('data-key');
//  localStorage.setItem("productId", key ); 
 console.log(  DataProductFrigo  ) 
 AddProductFrigo(DataProductFrigo).then((res) => {
  setRendering (!render)
 console.log(res);  
 }).catch((err) => {
         console.log(err + " 😱 error");
     }) }
    
    return (
      <Container  
    
        style = {{padding : '50px'}}
        > 
  
      <Form onSubmit={(e) => SubAdd(e)} action=''>
          <Form.Group  controlId="product" >
              <Form.Label class = 'title4 text-light'>Produit </Form.Label>
              {/* <Form.Control as="select"    onChange={handelChange}>
                  <option hidden value= 'choose...'   >Choose...</option>
                  {allProduct.map((product) => 
                      <option key={product.id} value={product.id}  >{product.name}</option>
                  )}
              </Form.Control> */}
              <Select 
                       styles = {  
                      {  menu: (provided ) => ({
                          ...provided,
                          color: 'black',
                        }),  
                      }}
                       options={options} 
                       onChange={ e => setData({ ...data, ['product']:  e.value })}  
                       />
              
          </Form.Group>

          <Form.Group controlId="quantity">
              <Form.Label class = 'title4 text-light' >Quantité</Form.Label>
              <Form.Control type="txt" placeholder="" onChange={handelChange} />
          </Form.Group>

       <Form.Group controlId="type">
              <Form.Label class = 'title4 text-light'> Type de quantité </Form.Label>
              <Form.Control as="select" onChange={handelChange}>
              <option hidden value= 'choose...'   >Choose...</option>

                  <option >(U)nité </option>
                  <option >(L)itre </option>
                  <option > (G)ramme</option>
              </Form.Control>
          </Form.Group>  
          <Form.Group  className = 'd-flex justify-content-center' >
                      <Button variant="dark" className='add' type="submit">
                        Ajouter
                       </Button>
        </Form.Group>
      </Form>
    </Container>
   
  )
    
}
