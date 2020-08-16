import React, { useState, useEffect } from 'react'
import { Form, Container, Button , Card } from 'react-bootstrap'
import Axios from 'axios'
import { getCategory,AddRecipe } from '../FunctionComponents/RecetteFunction'
import { Box } from "@chakra-ui/core";
import Nav  from '../LayoutsComponents/Nav' 
import ButtonSave from '../LayoutsComponents/ButtonSave';
export default function AddCategory(props) {

  const [categories, setcategories] = useState([])
  const [selectedImage, setselectedImage] = useState( ) 
  const [author , setAuthor  ] = useState( )
  const [data, setData] = useState( {})

  useEffect( () => {
      getCategory().then(response => {
        console.log(response.data.categories );
        setcategories(response.data.categories)
      }).catch((error) => {
        console.log('error ' + error);
      });    
    },[]);

    const fileInput = React.createRef();
    const onFileChange = (event) => {
      // console.log(event.target.files[0]);
      // setSelectedFile(event.target.files[0]);
      setselectedImage(fileInput.current.files[0]);
      console.log(fileInput.current.files[0]);
    };

    const handelChange =   (e) => { 
     setData( {...data, [e.target.id] :   e.target.value  })
     console.log(data);
    } 

    const DataRecette = {
      name  : data.title,
       description : 'Etape 1 '+ data.Etape1 + 'Etape 2 ' + data.Etape2 +  'Etape 3 ' + data.Etape3 ,
       time : data.time,
       number :data.numberPerson,
       image : selectedImage, 
       category_id : data.type

   }

  const SubAddRecipe =  (e) => {
      e.preventDefault();
      console.log( data.title);
       AddRecipe(DataRecette).then((res) => {
           console.log(res);
           localStorage.setItem('recetteId', res.data[0].id )
           console.log( localStorage.recetteId); 
  console.log(localStorage.username)
   setAuthor(localStorage.username)
           props.history.push('/AddProductsToRecipe')
          }).catch((err) => {
              console.log(err.message);
          })



  }

  return (
    <>
<Nav />
<div className="uk-section uk-section-default uk-padding-remove-top">
    <div className="uk-container container col-6 input"style={{   borderRadius: '20px' }} >
      
          <Card.Title className = 'text-center title pt-3' >
 Ajouter une Nouvelle Recette 
        </Card.Title> 
         <div className="uk-grid-large container col-11 p-4 " data-uk-grid >
   
    
        <Form className='  container p-4' onSubmit={(e) => SubAddRecipe(e)} action=''>
        <Box className='row'  >
     <Box className = 'col-6 '>
            <Form.Group controlId="title">
                <Form.Label> Titre  de la Recette </Form.Label>
                <Form.Control type="text" placeholder="nouvelle recette"
                className='input'  onChange={handelChange}  
                 />
            </Form.Group>
            <Form.Label>Les Etapes de la Recette </Form.Label>
            <Form.Group controlId="Etape1">
                <Form.Control type="text" placeholder="Etape 1"
                 className='input' onChange={handelChange}  
                 />
            </Form.Group>
            <Form.Group controlId="Etape2">
                <Form.Control type="text" placeholder="Etape 2"
                className='input' onChange={handelChange}  
                 />
            </Form.Group>
            <Form.Group controlId="Etape3">
                <Form.Control type="text" placeholder="Etape 3"
               className='input'   onChange={handelChange}  
                 />
            </Form.Group>
            </Box>

                           

<Box className = 'col-6 '>
            <Form.Group controlId="numberPerson">
                <Form.Label> Nombre de personnes </Form.Label>
                <Form.Control type="text" placeholder="Indiquez le nombre de personnes" 
                 className='input'  onChange={handelChange}  
                 />
            </Form.Group>

            <Form.Group controlId="time">
                <Form.Label> Temps de cuisson </Form.Label>
                <Form.Control type="text" placeholder="Indiquez le nombre de minutes de cuisson pour la recette" 
                className='input'   onChange={handelChange}  
                />
            </Form.Group>

            <Form.Group controlId="image"   >
                <Form.File  
                 label="Ajouter une Image"  
                    ref={fileInput}  
                    className='input'     onChange={onFileChange}  
                     aria-describedby="inputGroupFileAddon04"/>
            </Form.Group>

            <Form.Group controlId="type">
                <Form.Label> Type de la recette </Form.Label>
         
                <Form.Control as="select"  className='input'  onChange={handelChange }>
              <option hidden  >Choose...</option>
              {categories.map((category)=>
                  <option key={category.id}
                    value={category.id} > {category.name}</option>
              )}

                </Form.Control>
            </Form.Group>
            </Box>
                            
                            </Box>
                          <ButtonSave text = 'Save'/>
     
         </Form>
  
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

    </>
)
  
}
