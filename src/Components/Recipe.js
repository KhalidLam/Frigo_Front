import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { getRecipeWithProduct, AddToListe, DeleteProductRecipe } from './RecetteFunction';
import { Link } from 'react-router-dom';
import { FcPlus } from 'react-icons/fc';

import { Form, Button } from 'react-bootstrap';
 
import { FaTimes } from "react-icons/fa";
import Footer from './Footer'
import Comment from './Comment';




export default function Recipe(props) {
  const [recipe, setRecipe] = useState([])
  const [products, setProducts] = useState([])
  const [Step, setStep] = useState([])
  const [User, setUser] = useState()
  const [change, setChange] = useState(false)
  const [input, setInput] = useState(false)

  const [changeComment, setChangeComment] = useState(false)

  const [Ingredient, setIngredients] = useState([])
 

  const recetteId = props.match.params.recipeId
  useEffect(() => {
    getRecipeWithProduct(recetteId).then(response => {
      console.log(response.data);
      console.log(response.data[1]);
      console.log(response.data[0]);

      setRecipe(response.data[0]);
      setProducts(response.data[0].products);
      setStep(response.data[1]);
      setUser(response.data[2])
      localStorage.setItem('recetteId', response.data[0].id)
      setChange(true)
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

  return (
    <>
      <Nav />
      <div>


        <main className="uk-container p-3">
          <div className="uk-container">
            <div>

              <div className="pt-3">
                <h1 style={{ textAlign: "center" }}>{recipe.name}</h1>
                <div class="d-flex justify-content-center pt-5 pb-5"
                /* display: flex; */
                >
                  <img
                    className="uk-border-rounded-large"
                    src={`http://localhost:1000/${recipe.image}`}
                    alt="Image alt"
                    width='70%'
                    height='50%'

                    style={{
                      verticalAlign: 'none'
                    }}
                  />
                </div>
              </div>
              <div className="uk-width-expand@s   uk-flex-middle">
                <div>


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
                      <span className="uk-text-muted"> 21 recipes </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>




          <div className="uk-section uk-section-default">
            <div className="uk-container uk-container-small">
              <div className="uk-grid-large" data-uk-grid>
                <div className="uk-width-expand@m">
                  <div className="uk-article">
                    <h3>How to Make It</h3>
                    {/* {Step.map(step =>  */}
                    {Object.keys(Step).map(key =>


                      <div
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
                    <Comment  recipeId = {recetteId}/>
                  </div>
                </div>
                <div className="uk-width-1-3@m">


                  <Form.Group className='d-flex justify-content-center' >
                    <Button variant="success" className='add d-flex' type="submit" onClick={HandelAddToListe}>
                      <FcPlus /> Ajouter à La liste de Courses
                              </Button>
                  </Form.Group>

                  <h2> les Ingredients </h2>
                  <ul className="uk-list uk-list-large uk-list-divider uk-margin-medium-top">
                    {products.map(item =>
                      <>
                        <li className='d-flex justify-content-between'>{item.pivot.quantity + ' (' + item.pivot.type + ')' + item.name + ' '}
                          <FaTimes
                            style={{ width: '20px', height: '20px', color: 'red', marginTop: '7px', cursor: 'pointer' }}
                            onClick={() => deleteProduct(item.id)} />
                        </li>
                      </>
                    )}
                    <li>

                      <Form.Group >
                        <Button variant="warning" className='add '>
                          <Link to='/AddProductsToRecipe' >
                            Ajouter des produit à ma recette
                              </Link>
                        </Button>
                      </Form.Group>
                    </li>
                  </ul>



                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
      <Footer />
    </>
  )
}
