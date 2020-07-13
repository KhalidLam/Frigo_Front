import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Card, CardGroup, CardColumns, ListGroup, Button, Col, Row, Container, Form } from 'react-bootstrap';
import Background_6 from '../img/téléchargé.jpg';
import Background_24 from '../img/Oils.jpg';
import Background_1 from '../img/Fruit_vegetables.jpg';
import Background_5 from '../img/Meat_Poultry_Fish_Eggs.jpg';
import Background_3 from '../img/Spices_Herbs.jpg';
import { FcCheckmark } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import ModelAddProduct from "../Components/ModalComponents/ModelAddProduct";
import ModelUploadImage from "../Components/ModalComponents/ModelUploadImage";
import Nav from '../Components/Nav';
import { GetProductFrigo } from "../Components/FrigoFunction";
// import Background_6 from '../img/sugar.jpg';
import '../App.css';
import Quantity from './Quantity';
import { Box } from "@chakra-ui/core";
export default function Frigo1() {

    const [categoriesProducts, setCategoriesProducts] = useState([])
    const [Products, setProducts] = useState([])


    useEffect(async () => {
        // await axios.get(` http://localhost:1000/api/get?frigo_id=${localStorage.frigoId}`)
   await GetProductFrigo().then((res) => {
                setCategoriesProducts(res.data.success);

            }).catch((error) => {
                console.log(error);
            })

    }, [])
    const click = () => {
        console.log(categoriesProducts[0].products);
    }

    return (
        <>
            <Nav />

            <Container>
                <Row className=' p-4' style={{ backgroundImage: `url(${require('../img/Frigo_bg.jpg')} )` , borderRadius:'70px', }}   >
                    <Box className='col-6 ' style={{ maxHeight: ' 600px', overflow: 'auto' }} >
                        <Card.Title className='text-center text-capitalize '>  Voici tous les produits que vous possedez dans votre Frigo </Card.Title>
                        {/* <Row xs={1} md={2} lg={2} className=' d-flex row '> */}
                        {categoriesProducts.map(categorie =>
                            <>
                                <Col>
                                    <Card text="dark" style={{ backgroundImage: `url(${categorie.category_image} )`, backgroundSize: '300px 150px' }}
                                    >
                                        <Card.Body  >
                                            <Card.Title className='text-capitalize text-center'  >{categorie.category_name}</Card.Title>

                                            <ListGroup variant="flush" style={{ maxHeight: ' 200px', overflow: 'auto' }} >
                                                {Object.keys(categorie.products).map(key =>

                                                    <ListGroup.Item>
                                                        <Row xs={2} md={4} lg={6}>
                                                            <span
                                                                style={{ textAlign: 'center', display: 'contents' }}>
                                                                {categorie.products[key].pivot.quantity}
                                                            </span>
                                                            <span
                                                                style={{ fontSize: '10px', textAlign: 'center', display: 'contents' }}>
                                                                {'[' + categorie.products[key].pivot.type + ']'}
                                                            </span>
                                                            <span className='ml-2'  >   {categorie.products[key].name}   </span>

                                                            <Quantity
                                                                qty={categorie.products[key].pivot.quantity}
                                                                IdProduct={categorie.products[key].id}
                                                                type={categorie.products[key].pivot.type} />

                                                        </Row>
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </Card.Body>

                                    </Card>
                                    <br />
                                </Col>
                            </>
                        )}
                        {/* </Row> */}

                    </Box>

                    <Box className='col-6 mt-3'>
           <Card.Title className='text-center text-capitalize '>   Ajouter un produit au frigo </Card.Title>

                        <ModelAddProduct className='mt-5' />
                    </Box>
                </Row>
            </Container>

            <footer className="uk-section uk-section-default" style={{backgroundColor: ' #e8e4db59 '}}>
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


        </>
    )
}