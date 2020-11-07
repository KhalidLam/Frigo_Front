import React, { useEffect, useState, useContext } from 'react'
import { Button, AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Scale, useDisclosure, useToast   } from '@chakra-ui/core';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import SpinnerLoading from './SpinnerLoading';
import { DeleteProductRecipe } from '../FunctionComponents/RecetteFunction';
 

 export default function IngredientCard(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const cancelRef = React.useRef();
    const toast = useToast();
const [data, setdata] = useState({})
    const deleteProduct = (id) => {
        setdata({
          productId: id,
          recetteId: localStorage.recetteId
        }  )
        onOpen()
        console.log('ok');
    }

  const  confirmDeleteProdut = () =>{
 DeleteProductRecipe(data).then((res) => {

          props.setchange(!props.change)
         
          onClose()
          console.log(res);
          toast({
            title: "Produit supprimé avec success",
            description: " le produit a été bien supprimé ",
            status: "error",
            duration: 2500,
            isClosable: true,
          })
        }).catch((err) => {
          console.log(err.message);
        })
    }
       
  
     return (
        <Card className='container  row' style={{ maxHeight: ' 300px', overflow: 'auto' }}>
        {props.ingredient.products ? 
        <ListGroup className="list-group-flush  ">
          {props.ingredient.products.map(item =>
            <ListGroupItem key={item.id} className='d-flex justify-content-between'>
                {item.pivot.quantity + ' (' + item.pivot.type + ')' + item.name + ' ' } 
              {props.ingredient.user_id == localStorage.userId &&
             <>
              <FaTimes
              ref={btnRef}
            //    onClick={onOpen}
                  style={{ width: '20px', height: '20px', color: 'red', marginTop: '7px', cursor: 'pointer' }}
                  onClick={() =>  deleteProduct(item.id)} 
                  />
                  <Scale in={isOpen}>
                  {styles => (
                    <AlertDialog
                      leastDestructiveRef={cancelRef}
                      finalFocusRef={btnRef}
                      onClose={onClose}
                      isOpen={true}
                    >
                      <AlertDialogOverlay opacity={styles.opacity} />
                      <AlertDialogContent {...styles}>
                        <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                          Are you sure you want to discard all of your notes? 44 words
                          will be deleted.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            No
                          </Button>
                          <Button variantColor="red" onClick = {confirmDeleteProdut}  ml={3}>
                            Yes
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </Scale>
         
         
           </>
               }
            </ListGroupItem>

          )}
        </ListGroup>
          : <SpinnerLoading animation='border' />
          }
      </Card>
     )
 }
 