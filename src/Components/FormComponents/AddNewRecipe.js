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
                <Form.Control type="text"  
                className='input'  onChange={handelChange}  
                 />
            </Form.Group>
            <Form.Label>  Etape 1 </Form.Label>
            <Form.Group controlId="Etape1">
                <Form.Control type="text"  
                 className='input' onChange={handelChange}  
                 />
            </Form.Group>
            <Form.Label>  Etape 2 </Form.Label>
            <Form.Group controlId="Etape2">
                <Form.Control type="text"  
                className='input' onChange={handelChange}  
                 />
            </Form.Group>
            <Form.Label>  Etape 3 </Form.Label>
            <Form.Group controlId="Etape3">
                <Form.Control type="text" 
               className='input'   onChange={handelChange}  
                 />
            </Form.Group>
            </Box>

                           

<Box className = 'col-6 '>
            <Form.Group controlId="numberPerson">
                <Form.Label> Nombre de personnes </Form.Label>
                <Form.Control type="text"  
                 className='input'  onChange={handelChange}  
                 />
            </Form.Group>

            <Form.Group controlId="time">
                <Form.Label> Temps de cuisson </Form.Label>
                <Form.Control type="text"  
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
   <ButtonSave color = 'btn-warning' text = 'Save'/>
     
         </Form>
  
        </div>
    </div>
    </div>
 
    </>
)
  
}
