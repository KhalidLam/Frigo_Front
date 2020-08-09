import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Card, ListGroup, ListGroupItem, Button , Form,Spinner} from 'react-bootstrap';
import { getListe, AddListeToFrigo } from './RecetteFunction';
import { FcPlus } from 'react-icons/fc';
import { Link } from 'react-router-dom' ;

export default function Liste() {
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
           
          }).catch((error) => {
            console.log(error.response);
          });
          console.log(Liste) 
    }
    return (
        <>
            <Nav />
            <div>
                <Card style={{ width: '50%' }}>
                    <>
                    {/* <Card.Img variant="top" src={`http://localhost:1000/${recipe.image}`} /> */}
                        <Card.Body>
                            <Card.Title className = 'd-flex justify-content-center' > Liste de course    </Card.Title>
                            {ShowData =='Ranger'?
                                 <Form.Group  className = 'd-flex justify-content-center' >
                               <Button variant="success" className='add d-flex' type="submit" onClick = {HandelAdd}>
                               <FcPlus /> Ranger dans le frigo 
                              </Button> 
                              </Form.Group>
                              :  ShowData =='Parcourir' ?  <Form.Group  className = 'd-flex justify-content-center' >
                              <Button variant="success" className='add d-flex' type="submit">
                              <Link to="/recipes">  Parcourir les recettes pour remplir votre liste de course </Link>
                             </Button> 
                             </Form.Group> : 
                             <Spinner animation="border" role="status">
                              <span className="sr-only">Loading...</span>
                            </Spinner>
                             }  
                        </Card.Body>
                        {Show && <ListGroup className="list-group-flush d-flex justify-content-center">
                                {Products.map(Product =>
                                    <ListGroupItem>{Product.quantity + ' (' + Product.type + ')' + Product.product_name}</ListGroupItem>
                               )}  
                                 </ListGroup> 
                        }
                    </>
                </Card>
            </div>
        </>
    )
}