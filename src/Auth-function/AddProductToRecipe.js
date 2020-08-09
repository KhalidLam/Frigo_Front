import React, { useState, useEffect, useContext } from 'react'
import { Card, Form, Container, Button, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Box } from '@chakra-ui/core'
import Nav from './Nav'
import { getAllProduct, getRecipeWithProduct, AddProductRecipe } from '../Components/RecetteFunction'
import { RenderingContext } from './Auth'

export default function AddProductToRecipe(props) {

  const rendering = useContext(RenderingContext);


  const [allProduct, setAllProduct] = useState([])
  const [recette, setRecette] = useState([])

  const [data, setData] = useState({})
  const [Products, setProduct] = useState({})
  const [Show, setShow] = useState(false)
  const [ProductName, setProductName] = useState('')

  useEffect(() => {

    getAllProduct().then(response => {
      console.log(response.data.success);
      setAllProduct(response.data.success)
    }).catch((error) => {
      console.log('error ' + error);
    });


    getRecipeWithProduct(localStorage.recetteId).then(response => {
      console.log(response.data);
      setRecette(response.data)
    }).catch((error) => {
      console.log('error ' + error);
    });

  }, [Show]);

  const handelChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
    allProduct.map((item) => { if (item.id == e.target.value) { setProductName(item.name) } })
    console.log(ProductName);
  }

  const DataProductRecette =
  {
    productId: data.product,
    quantity: data.quantity,
    recetteId: localStorage.recetteId,
    type: data.type
  }

  const SubAddProductRecipe = (e) => {
    e.preventDefault();
    rendering()
    console.log(DataProductRecette)
    AddProductRecipe(DataProductRecette).then((res) => {
      console.log(res);
      console.log(DataProductRecette.productId);
      setShow(!Show)
      setProduct({ ...Products , [DataProductRecette.productId]: DataProductRecette })
      // setProduct
      console.log(Products);

 

    }).catch((err) => {
      console.log(err + " 😱 rrrr");
    })
  }

  return (
    <Container>
      <Nav />
      <Row lg={12}>
        <Card style={{ width: '18rem' }}>
          {recette.map( recette => 
  
            <>
              <Card.Img variant="top" src={`http://localhost:1000/${recette.image}`} />
              <Card.Body>
                <Card.Title>{recette.name}</Card.Title>
                <Card.Text>
                  {recette.description}
                </Card.Text>
              </Card.Body>
              {/* {Show && */}
              <ListGroup className="list-group-flush">
                {recette.products.map(item =>
                  <ListGroupItem>{item.pivot.quantity + ' (' + item.pivot.type + ')' + item.name}</ListGroupItem>
                )}
                {/* {Object.keys(Products).map( key => 
   {Object.keys(Products[key]).map( key1 =>
  <ListGroupItem>{Products[key][key1].quantity +' (' + Products[key][key1].type + ')' + ProductName }</ListGroupItem>
  )}
)} */}
              </ListGroup>
              {/*   }     */}
            </>
          )}

          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>


        </Card>



        <Card>
          <Form className='col-10 p-4' onSubmit={(e) => SubAddProductRecipe(e)} action=''>

            <Form.Group controlId="product">
              <Form.Label> Product </Form.Label>
              <Form.Control as="select" onChange={handelChange} >
                <option hidden  >Choose...</option>
                {allProduct.map((product) =>
                  <option key={product.id} value={product.id}>{product.name}</option>
                )}

              </Form.Control>
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>  Quantity </Form.Label>
              <Form.Control type="text" placeholder='quantity' onChange={handelChange} />
            </Form.Group>


            <Form.Group controlId="type">
              <Form.Label> Type of Quantity </Form.Label>
              <Form.Control as="select" onChange={handelChange}>
                <option hidden>Choose... </option>
                <option >(U)nité </option>
                <option >(L)itre </option>
                <option > (G)ramme</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit">
              Ajouter
  </Button>
          </Form>

        </Card>


      </Row>

    </Container>
  )
}
