import React, { useEffect, useState, useContext } from 'react'
import Nav from './LayoutsComponents/Nav'
import { getRecipeWithProduct, AddToListe, DeleteProductRecipe, DeleteRecipe } from './FunctionComponents/RecetteFunction';
import { useHistory } from 'react-router-dom';
import { FcPlus } from 'react-icons/fc';
import { Form, Button, Card, ListGroup, ListGroupItem, Spinner, Alert } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";
import Footer from './LayoutsComponents/Footer'
import Comment from './FormComponents/Comment';
import { Box } from '@chakra-ui/core';
import SpinnerLoading from './LayoutsComponents/SpinnerLoading';
import { MissingContext } from '../App';
import AlertComponents from './LayoutsComponents/AlertComponents';
import ButtonSave from './LayoutsComponents/ButtonSave';
// import Ingredients from './LayoutsComponents/Ingredients';

export default function Recipe(props) {
  const { MissProducts, setMissProducts } = useContext(MissingContext);
  let history = useHistory();

  const [recipe, setRecipe] = useState([])
  const [products, setProducts] = useState([])
  const [Step, setStep] = useState([])
  const [User, setUser] = useState()
  const [change, setChange] = useState(false)
  const [Show, setShow] = useState(false)
  const [changeComment, setChangeComment] = useState(false)
  const [Alert, setAlert] = useState(false)
  const [Ingredient, setIngredients] = useState([])

  const recetteId = props.match.params.recipeId

  // const [MissProduct, setMissProduct] = useState([])
  useEffect(() => {
    console.log(MissProducts);
    getRecipeWithProduct(recetteId).then(response => {
      console.log(response.data);
      console.log(response.data[1]);
      console.log(response.data[0]);

      setRecipe(response.data[0]);
      setProducts(response.data[0].products);
      setStep(response.data[1]);
      setUser(response.data[2])
      // setMissProduct(JSON.parse(localStorage.MissProduct))
      // console.log('JSON.parse(localStorage.MissProduct)');
      // console.log(JSON.parse(localStorage.MissProduct)); 
      localStorage.setItem('recetteId', response.data[0].id)
      setChange(true)
      setShow(true)
      setAlert(false)
    }).catch((error) => {
      console.log('error ' + error);
    });
    console.log(Step)
    console.log(recipe)
    // console.log( props.location.query.backurl)
  }, [changeComment])

  useEffect(() => {
    products.map((item) => {
      Ingredient.push({ 'id': item.id, 'quantity': item.pivot.quantity, 'type': item.pivot.type })
    })
    console.log(Ingredient)
  }, [change])

  const HandelAddToListe = () => {
    AddToListe(Ingredient).then(res => {
      setAlert(true)
      console.log(res);
    }).catch((error) => {
      console.log(error.response);
    });
    console.log(Ingredient)
  }
  //delete product recipe
  const deleteProduct = (id) => {
    const data = {
      productId: id,
      recetteId: localStorage.recetteId
    }
    DeleteProductRecipe(data).then((res) => {
      setChangeComment(!changeComment)
      console.log(res);
    }).catch((err) => {
      console.log(err.message);
    })
  }
  const SubDeleteRecipe = (e) => {
    e.preventDefault();
    DeleteRecipe(recetteId).then((res) => {
      setChangeComment(!changeComment)
      console.log(res);
      history.push('/recipes')
    }).catch((err) => {
      console.log(err.message);
    })
  }
  return (
    <>
      <Nav />
      <div>
        {Alert &&
          <AlertComponents text='  les ingredients de cette recette a été bien ajouter à ' link='la liste de courses' variant='primary' />

        }
        <main className="uk-container p-3">


          <Card className='container col-10    ' >
            {Show ?
              <>
                <Card.Title className='text-center title pt-4'>
                  {recipe.name}
                </Card.Title>
                <div className="col-md-6 container" >
                  <Card.Img className='mt-5 ml-2'
                    //  style={{ width: "350px" }} 
                    src={`http://localhost:1000/${recipe.image}`} />
                </div>

                <div className="col-md-6 container" >
                  <div
                    className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider"
                    data-uk-grid
                  >
                    <div>
                      <span data-uk-icon="icon: clock; ratio: 1.4" />
                      <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                        Active Time
               </h5>
                      <span className="uk-text-small"> {recipe.cook_time} mins</span>
                    </div>

                    <div>
                      <span data-uk-icon="icon: users; ratio: 1.4" />
                      <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                        Yield
                            </h5>
                      <span className="uk-text-small">Serves {recipe.number_person}  </span>
                    </div>

                  </div>
                  <hr />
                  <div data-uk-grid>
                    <div className="uk-width-auto@s uk-text-small">
                      <p className="uk-margin-small-top uk-margin-remove-bottom">
                        Created by <a href="#"> {User} </a>
                      </p>
                      {/* <span className="uk-text-muted"> 21 recipes </span> */}
                    </div>
                    {recipe.user_id == localStorage.userId &&
                      <Form className='  container p-4' onSubmit={(e) => SubDeleteRecipe(e)} action=''>
                        <ButtonSave color='btn-danger' text='supprimer la recette' />
                      </Form>
                    }
                  </div>
                </div>
                <div className="uk-section uk-section-default">
                  <div className="uk-container uk-container-small">
                    <div className="uk-grid-large" data-uk-grid>
                      <div className="uk-width-expand@m">
                        <div className="uk-article">
                          <Card.Title className='text-center title  '>How to Make It </Card.Title>

                          {Object.keys(Step).map((key, i) =>
                            <div key={i}
                              id={`step-2`}
                              className="uk-grid-small uk-margin-medium-top"
                              data-uk-grid
                            >
                              <div className="uk-width-auto">
                                <a
                                  href="#"
                                  className="uk-step-icon"
                                  data-uk-icon="icon: check; ratio: 0.8"
                                  data-uk-toggle="target: #step-1; cls: uk-step-active"
                                />
                              </div>
                              <div className="uk-width-expand">
                                <h5
                                  className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                                  data-uk-leader="fill:—"
                                >
                                  {key.slice(5)}. Step
                             </h5>
                                <div className="uk-step-content">
                                  {Step[key]}
                                </div>
                              </div>
                            </div>
                          )}
                          <hr className="uk-margin-medium-top uk-margin-large-bottom" />
                          <Comment recipeId={recetteId} />
                        </div>
                      </div>
                      {/* Les ingedients */}
                      <div className="col-4 ml-4">
                        <Card.Title className='text-center title d-flex justify-content-between'>

                          les Ingredients
                          {recipe.user_id == localStorage.userId &&
                            <FcPlus onClick={() => history.push('/AddProductsToRecipe')} />
                          }
                        </Card.Title>

                        <ul className="uk-list uk-list-large uk-list-divider uk-margin-medium-top">
                          <Card className='container  row' style={{ maxHeight: ' 300px', overflow: 'auto' }}>
                            {recipe.products ? <ListGroup className="list-group-flush  ">
                              {products.map(item =>
                                <ListGroupItem key={item.id} className='d-flex justify-content-between'>{item.pivot.quantity + ' (' + item.pivot.type + ')' + item.name + ' '}
                                  {recipe.user_id == localStorage.userId &&
                                    <FaTimes
                                      style={{ width: '20px', height: '20px', color: 'red', marginTop: '7px', cursor: 'pointer' }}
                                      onClick={() => deleteProduct(item.id)} />}
                                </ListGroupItem>

                              )}
                            </ListGroup>
                              : <SpinnerLoading animation='border' />}
                          </Card>
                          <li>
                            <Form.Group >
                              <Button href="#" variant="warning" className='add d-flex' type="submit" onClick={HandelAddToListe}>
                                Ajouter à La liste de Courses
                               </Button>
                            </Form.Group>
                          </li>
                          {MissProducts.length !== 0 &&
                            <li>
                              <Card.Title className='text-center title4  '>
                                les Aliments Manquant
                         </Card.Title>
                              <Card className='container  row'>

                                <ListGroup className="list-group-flush  ">
                                  {MissProducts.map((item, index) =>
                                    <ListGroupItem key={index}  >
                                      {item}
                                    </ListGroupItem>
                                  )}
                                </ListGroup>
                              </Card>
                            </li>
                          } 
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
              <SpinnerLoading animation='border' />
            }
          </Card>

        </main>
      </div>

    </>
  )
}
