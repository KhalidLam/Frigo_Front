import React, { useState, useEffect, useContext } from 'react'
import { Card, Form, Container, Button, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Box } from '@chakra-ui/core'
import Nav from '../LayoutsComponents/Nav'
import { getAllProduct, getRecipeWithProduct, AddProductRecipe } from '../FunctionComponents/RecetteFunction'
import { RenderingContext } from '../../App'
import ThemeContext from "../LayoutsComponents/ThemeContext";
export default function AddProductToRecipe(props) { 
  const [allProduct, setAllProduct] = useState([])
  const [recipe, setRecipe] = useState([])
  const [data, setData] = useState({})
  const [Products, setProduct] = useState({})
  const [Show, setShow] = useState(false)
  const [Show1, setShow1] = useState(false) 
  const [ProductName, setProductName] = useState('')

  useEffect(() => { 
    getAllProduct().then(response => {
      console.log(response.data.success);
      setAllProduct(response.data.success)
    }).catch((error) => {
      console.log('error ' + error);
    });


    getRecipeWithProduct(localStorage.recetteId).then(response => {
      console.log(response.data[0]);
      console.log(response.data);
      console.log(localStorage.recetteId);

      setRecipe(response.data[0]);
    }).catch((error) => {
      console.log('error ' + error);
    });
    console.log(recipe);

  }, [Show]);

  const handelChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
    allProduct.map((item) => { if (item.id == e.target.value) { setProductName(item.name) } })
    console.log(data);
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

    console.log(DataProductRecette)
    AddProductRecipe(DataProductRecette).then((res) => {
      console.log(res);
      console.log(DataProductRecette.productId);
      setShow(!Show)
      setShow1(true)
      
      setProduct({ ...Products, [DataProductRecette.productId]: DataProductRecette })
      // setProduct
      console.log(Products);


    }).catch((err) => {
      console.log(err + " 😱 rrrr");
    })
  }

  return (
    <>
      <Nav />
      <div>
        <div className="uk-section uk-section-default uk-padding-remove-top">
          <div className="uk-container">
            <div className="uk-grid-large" data-uk-grid>
              <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                <div>
                  <Card style={{ width: '25rem' }}>
                    <>
                      <Card.Img variant="top" src={`http://localhost:1000/${recipe.image}`} />
                      <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                          {recipe.description && recipe.description.slice(50, 100)} ...
      </Card.Text>
                      </Card.Body>
                      {Show1 &&
                        <ListGroup className="list-group-flush">
                          {recipe.products.map(item =>
                            <ListGroupItem>{item.pivot.quantity + ' (' + item.pivot.type + ')' + item.name}</ListGroupItem>
                          )}
                     </ListGroup>
                      }
                    </>
                     {/* <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                       </Card>
                </div> 
              </div>
              
              <div className="uk-width-1-2@m">
                <Card style={{  backgroundColor: 'rgb(235, 74, 67)', borderRadius: '20px', color: 'white' }}>
                  <Form className='col-10 p-4' onSubmit={(e) => SubAddProductRecipe(e)} action=''>
                    <Form.Group controlId="product">
                      <Form.Label> Product </Form.Label>
                      <Form.Control as="select" onChange={handelChange} className='input' >
                        <option hidden  >Choose...</option>
                        {allProduct.map((product) =>
                          <option data-key={product.id} value={product.id} > {product.name} </option>
                        )}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="quantity">
                      <Form.Label>  Quantity </Form.Label>
                      <Form.Control style= {{backgroundColor: 'rgb(235, 74, 67)'}}  className='input' onChange={handelChange} />
                    </Form.Group>


                    <Form.Group controlId="type">
                      <Form.Label> Type of Quantity </Form.Label>
                      <Form.Control as="select" className='input' onChange={handelChange}>
                        <option hidden>Choose... </option>
                        <option >(U)nité </option>
                        <option >(L)itre </option>
                        <option > (G)ramme</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group  className = 'd-flex justify-content-center' >
                      <Button variant="warning" className='add' type="submit">
                        Ajouter
                       </Button>
                    </Form.Group>
                  </Form>
                </Card>
              </div>

            </div>
          </div>
        </div>
        <footer className="uk-section uk-section-default">
          <div className="uk-container uk-text-secondary uk-text-500">
            <div className="uk-child-width-1-2@s" data-uk-grid>
              <div>
                <a href="#" className="uk-logo">
                  Kocina
          </a>
              </div>
              <div className="uk-flex uk-flex-middle uk-flex-right@s">
                <div data-uk-grid className="uk-child-width-auto uk-grid-small">
                  <div>
                    <a
                      href="https://www.facebook.com/"
                      data-uk-icon="icon: facebook; ratio: 0.8"
                      className="uk-icon-button facebook"
                      target="_blank"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/"
                      data-uk-icon="icon: instagram; ratio: 0.8"
                      className="uk-icon-button instagram"
                      target="_blank"
                    />
                  </div>
                  <div>
                    <a
                      href="mailto:info@blacompany.com"
                      data-uk-icon="icon: twitter; ratio: 0.8"
                      className="uk-icon-button twitter"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-child-width-1-2@s uk-child-width-1-4@m" data-uk-grid>
              <div>
                <ul className="uk-list uk-text-small">
                  <li>
                    <a className="uk-link-text" href="#">
                      Presentations
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Professionals
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Stores
              </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="uk-list uk-text-small">
                  <li>
                    <a className="uk-link-text" href="#">
                      Webinars
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Workshops
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Local Meetups
              </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="uk-list uk-text-small">
                  <li>
                    <a className="uk-link-text" href="#">
                      Our Initiatives
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Giving Back
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Communities
              </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="uk-list uk-text-small">
                  <li>
                    <a className="uk-link-text" href="#">
                      Contact Form
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Work With Us
              </a>
                  </li>
                  <li>
                    <a className="uk-link-text" href="#">
                      Visit Us
              </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="uk-margin-medium-top uk-text-small uk-text-muted">
              <div>
                Made by a{" "}
                <a
                  className="uk-link-muted"
                  href="https://drifter.works/"
                  target="_blank"
                >
                  Drifter
          </a>{" "}
          in Guatemala City.
        </div>
            </div>
          </div>
        </footer>
        <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
          <div className="uk-offcanvas-bar">
            <a className="uk-logo" href="index.html">
              Kocina
      </a>
            <button
              className="uk-offcanvas-close"
              type="button"
              data-uk-close="ratio: 1.2"
            />
            <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="recipe.html">Recipe</a>
              </li>
              <li>
                <a href="search.html">Search</a>
              </li>
              <li className="uk-active">
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="sign-in.html">Sign In</a>
              </li>
              <li>
                <a href="sign-up.html">Sign Up</a>
              </li>
            </ul>
            <div className="uk-margin-medium-top">
              <a
                className="uk-button uk-width-1-1 uk-button-primary"
                href="sign-up.html"
              >
                Sign Up
        </a>
            </div>
            <div className="uk-margin-medium-top uk-text-center">
              <div
                data-uk-grid
                className="uk-child-width-auto uk-grid-small uk-flex-center"
              >
                <div>
                  <a
                    href="https://twitter.com/"
                    data-uk-icon="icon: twitter"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/"
                    data-uk-icon="icon: facebook"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/"
                    data-uk-icon="icon: instagram"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://vimeo.com/"
                    data-uk-icon="icon: vimeo"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
