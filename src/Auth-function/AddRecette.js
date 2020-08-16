
import React, { useState, useEffect } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import Axios from 'axios'
import { getCategory,AddRecipe } from '../Components/FunctionComponents/RecetteFunction'
import Nav from './Nav'

export default function AddRecette(props) {
 
    const [categories, setcategories] = useState([])
    const [selectedImage, setselectedImage] = useState( ) 
    // const [select , setselect ] = useState('choose...' )
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
         description : data.description,
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
             localStorage.setItem('recetteId',res.data.id )
             console.log( localStorage.recetteId); 
             props.history.push('/addrecipe')
            }).catch((err) => {
                console.log(err.message);
            })
    }
 
    return (
        <Container style={{ backgroundColor: '#00c4ffb0' }} >
              <Nav />
            <Form className='col-10 p-4' onSubmit={(e) => SubAddRecipe(e)} action=''>

                <Form.Group controlId="title">
                    <Form.Label>Titre  de la Recette </Form.Label>
                    <Form.Control type="text" placeholder="nouvelle recette"
                     onChange={handelChange}  
                     />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Les étapes de la Recette </Form.Label>
                    <Form.Control as="textarea" rows="3" 
                      onChange={handelChange}  
                     />
                </Form.Group>

                <Form.Group controlId="numberPerson">
                    <Form.Label> Nombre de personnes </Form.Label>
                    <Form.Control type="text" placeholder="nouvelle recette" 
                      onChange={handelChange}  
                     />
                </Form.Group>

                <Form.Group controlId="time">
                    <Form.Label> Temps de cuisson </Form.Label>
                    <Form.Control type="text" placeholder="Indiquez le nombre de minutes de cuisson pour la recette" 
                      onChange={handelChange}  
                    />
                </Form.Group>
 
                <Form.Group controlId="image"   >
                    <Form.File  
                     label="Ajouter une Image"  
                        ref={fileInput}  
                         onChange={onFileChange}  
                         aria-describedby="inputGroupFileAddon04"/>
                </Form.Group>

                <Form.Group controlId="type">
                    <Form.Label> Type de la recette </Form.Label>
             
                    <Form.Control as="select"  onChange={handelChange }>
                  <option hidden  >Choose...</option>
                  {categories.map((category)=>
                      <option key={category.id}  value={category.id} > {category.name}</option>
                  )}
 
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">
                    Ajouter
                </Button>
            </Form>
        </Container>
    )
}
