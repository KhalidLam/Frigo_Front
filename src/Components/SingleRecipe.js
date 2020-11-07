import React, { useEffect, useState, useContext } from 'react'
import Nav from './LayoutsComponents/Nav'
import { getRecipeWithProduct, AddToListe,   DeleteRecipe, RemoveProductfromFrigo } from './FunctionComponents/RecetteFunction';
import { useHistory } from 'react-router-dom';
import { FcPlus } from 'react-icons/fc';
import { Form, Button, Card, ListGroup, ListGroupItem, Spinner  } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";
import Footer from './LayoutsComponents/Footer'
import Comment from './FormComponents/Comment';
import SpinnerLoading from './LayoutsComponents/SpinnerLoading';
import { MissingContext } from '../App'; 
import ButtonSave from './LayoutsComponents/ButtonSave'; 
import IngredientCard from './LayoutsComponents/IngredientCard'
import { useToast } from '@chakra-ui/core';
export default function Recipe(props) {
  const { MissProducts, setMissProducts } = useContext(MissingContext);
  let history = useHistory();

  const [recipe, setRecipe] = useState([])
  const [products, setProducts] = useState([])
  const [Step, setStep] = useState([])
  const [User, setUser] = useState()
  const [changeProduct, setChangeProduct] = useState(false)
  const [Show, setShow] = useState(false)
  const [change , setChange ] = useState(false) 
  const [Ingredient, setIngredients] = useState([])

  const recetteId = props.match.params.recipeId
  const toast = useToast();
   
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
      setChangeProduct(true)
      setShow(true)
      // setAlert(false)
    }).catch((error) => {
      console.log('error ' + error);
    });
    console.log(Step)
    console.log(recipe) 
  }, [change ])

  useEffect(() => {
    products.map((item) => {
      Ingredient.push({ 'id': item.id, 'quantity': item.pivot.quantity, 'type': item.pivot.type })
    })
    console.log(Ingredient)
  }, [changeProduct])

  const RemovefromFrigo = (e) => {
    RemoveProductfromFrigo(Ingredient).then((res) => {
      toast({
        title: "La recette est réalisée",
        description: "les quantités de cette recette a été retirées de votre frigo ",
        status: "success",
        duration: 2500,
        isClosable: true,
      })
      console.log(res);
    }).catch((err) => {
      console.log(err.message);
      toast({
        title: "Erreur",
        description: "les produits de cette recette n'existe pas dans votre frigo ",
        status: "error",
        duration: 2500,
        isClosable: true,
      })
    })
  }
  const HandelAddToListe = () => {
    AddToListe(Ingredient).then(res => {
      toast({
        // title: "",
        description: " les ingredients de cette recette a été bien ajouter à votre liste de courses",
        status: "success",
        duration: 2500,
        isClosable: true,
      })
      console.log(res);
    }).catch((error) => {
      console.log(error.response);
    });
    console.log(Ingredient)
  }
  //delete product recipe
 
 
  const SubDeleteRecipe = (e) => {
    e.preventDefault();
    DeleteRecipe(recetteId).then((res) => {
      setChange(!change )
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
        <main className="uk-container p-3"> 
          <Card className='container col-10    ' >
            {Show ?
              <>
                <Card.Title className='text-center title pt-4'>
                  {recipe.name}
                </Card.Title>
                <div className="col-md-6 container" style={{ height: "400px" }} >
                  <Card.Img className='mt-5 ml-2'
                    style={{ height: "85%" }}
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
                          {/* comment */}
                          <Comment recipeId={recetteId}   />

                        </div>
                      </div>
                      {/* Les ingedients */}
                      <div className="col-4 ml-4">
                        <Card.Title className='text-center title d-flex justify-content-between'>

                          les Ingredients
                          {recipe.user_id == localStorage.userId &&
                            <FcPlus style={{ cursor: 'pointer' }} onClick={() => history.push('/AddProductsToRecipe')} />
                          }
                        </Card.Title>
                    
                        <ul className="uk-list uk-list-large uk-list-divider uk-margin-medium-top">

                          <IngredientCard  ingredient = {recipe.products && recipe } change = {change }
                           setchange = {setChange } />
                     
                          <li>
                            <Form.Group >
                              <Button href="#" variant="warning" className='add d-flex' type="submit" onClick={HandelAddToListe}>
                                Ajouter à La liste de Courses
                               </Button>
                            </Form.Group>
                          </li>
                          <li>
                            <Form.Group >
                              <Button href="#" variant="warning" className='add d-flex' type="submit" onClick={RemovefromFrigo}>
                                Cette recette a été bien Realisée
                               </Button>
                            </Form.Group>
                          </li>

                          {/* miss products */}
                          {MissProducts && MissProducts.length !== 0 &&
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
