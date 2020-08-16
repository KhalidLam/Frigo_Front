import React, { useEffect,useContext, useState ,useRef } from 'react' 
import { useReactToPrint } from 'react-to-print';
 import Nav from './LayoutsComponents/Nav'
import { Card, ListGroup, ListGroupItem, Button , Form,Spinner} from 'react-bootstrap';
import { getListe, AddListeToFrigo, DeleteAllProductOfListe } from './FunctionComponents/RecetteFunction';
import { FcPlus } from 'react-icons/fc';
import { Link } from 'react-router-dom' ;
import {FiPrinter} from 'react-icons/fi'
import { FaTimes } from "react-icons/fa";
import ProductsPrinter from './ProductsPrinter'
import ThemeContext from "./LayoutsComponents/ThemeContext";

export default function Liste() {
  const { render, setRendering } = useContext(ThemeContext );  
  // const [CickPrint, setClickPrint] = useState(false) 
  const componentRef = useRef();
  // const handleClickPrint = (handlePrint) =>{
    const handlePrint =   useReactToPrint({
      content: () => componentRef.current, 
    });
// setClickPrint(true)
//   }
   
    const [Show, setShow] = useState(false)
    const [Change, setChange] = useState(false)
    const [ShowData, setShowData] = useState(false)
    const [Products, setProducts] = useState([])
    const [Liste, setListe] = useState([])
    useEffect(() => {
        getListe().then(res => {
            setProducts(res.data)
            console.log(res.data);
            setShow(true) 
            setShowData('Ranger')
            if( res.data == ''){
             setShowData('Parcourir') 
            }
        }).catch((error) => {
            console.log(error.response);
        });
        console.log(Products); 
    }, [Change]) 

    useEffect(() => {
        Products.map((item) => {
          Liste.push({ 'id': item.product_id, 'quantity': item.quantity, 'type': item.type })
        })
        console.log(Liste)
      }, [Show])

    const HandelAdd = () =>{
        AddListeToFrigo(Liste).then(res => {
            console.log(res); 
            setChange(!Change)
            setShowData('Parcourir') 
           
          }).catch((error) => {
            console.log(error.response);
          });
          console.log(Liste) 
    }

    const HandleDeleteListe  = () => { 
    DeleteAllProductOfListe().then((res) => { 
        setChange(!Change)
        // setShowData('Parcourir')  
        console.log(res);
      }).catch((err) => {
        console.log(err.message);
      })
    }
    return (
        <>
            <Nav />
        
            <Card className='container p-3   col-6' >
                    <>
                    {/* <Card.Img variant="top" src={`http://localhost:1000/${recipe.image}`} /> */}
                        <Card.Body>
                            <Card.Title className = 'd-flex justify-content-center title2' > Liste de course    </Card.Title>
                           
                            {ShowData =='Ranger'?
                            <>
                          <Form.Group  className = 'd-flex justify-content-between' >
                               <Button variant="success" className='add d-flex title3 text-dark' type="submit" onClick = {HandelAdd}>
                               <FcPlus /> Ranger dans le frigo 
                              </Button> 
                            
                              <Button variant="warning" className='add d-flex title3 text-dark' type="submit" 
                              onClick = {  HandleDeleteListe } >
                                {/* onClick = { HandleDeleteListe}>  */}
                              <FaTimes
                                style={{ width: '20px', height: '20px', color: 'red', marginTop: '7px', cursor: 'pointer' }}/>  
                               Supprimer Tout les Aliments
                              </Button> 
                              <FiPrinter style = {{width: '24px', cursor: 'pointer' }} onClick={handlePrint} /> 
                              </Form.Group>
                               </>
                              :  ShowData =='Parcourir' ?  
                              <Form.Group className='d-flex justify-content-center' >
                              <Link to="/recipes" className='add d-flex btn-success p-2 '
                              style = {{ textDecoration : 'none' }}>
                               <span className = 'title3 text-dark' >Parcourir les recettes pour remplir votre liste de course </span> 
                                 </Link>
                              </Form.Group>
                               : 
                            <div className=' uk-margin-large-top uk-flex-center' style={{ textAlign: 'center' }}>
                            <Spinner animation="border" />
                            </div> 
                             }   
                        </Card.Body>
                    
                            {Show && 
                            <>
                                <ProductsPrinter 
                                  //  delete = { () => HandleDeleteListe()}
                                  change = {Change}
                                  setChange = {() =>  setChange()}
                                // text = {CickPrint ? ' Votre Liste de courses ' :''} 
                                 products = {Products}  ref={componentRef} />
                          
</>
                        }
                    </> 
                </Card>
          
        </>
    )
}
 