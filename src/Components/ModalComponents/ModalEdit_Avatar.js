import React, { useContext, useState, useEffect } from 'react'
import { Button, Modal, Card, Form  } from 'react-bootstrap';
import ThemeContext from '../LayoutsComponents/ThemeContext';
import { EditAvatar} from '../FunctionComponents/UserFunction'; 
import ButtonSave from '../LayoutsComponents/ButtonSave';
  
export default function ModalEdit_Avatar(props) {
    
    const { render, setRendering } = useContext(ThemeContext ); 
    const [selectedImage, setselectedImage] = useState() 
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fileInput = React.createRef();

    const onFileChange = (event) => {
      // console.log(event.target.files[0]);
      // setSelectedFile(event.target.files[0]);
      setRendering(!render)
      setselectedImage(fileInput.current.files[0]);
      console.log(fileInput.current.files[0]);
    };
   
    const SubEditAvatar = (e) => {
      e.preventDefault();
      EditAvatar(selectedImage).then(res => {
        console.log(res);
        handleClose() 
        setRendering(!render)
      }).catch((err) => {
        console.log(err.message);
      })
    }
    return (
        < >
           
   <Form.Group className='d-flex justify-content-center  ' >
            <Button variant="warning" className='add 'onClick={handleShow } >
             Modifier la photo 
             </Button>
      </Form.Group>  
      
 
      <Modal show={show } onHide={handleClose } style={{ borderRadius: '20px' }} id='modal'>
   <Card className = 'container  ' >
    <Modal.Body >
    <Card.Title className = 'title2 text-center'> Modifier votre Profile    </Card.Title>
    <div class=" container col-md-5 " >
    
        <Card.Img variant="top" src={`http://localhost:1000/${props.User.avatar}`} 
        
        />
        </div>
        <Form  class=" container col-md-5 p-4"
          onSubmit={(e) => SubEditAvatar(e)} action=''
          action=''>
          <Form.Group controlId="image"   >
            <Form.File 
              ref={fileInput}
              onChange={onFileChange}
              aria-describedby="inputGroupFileAddon04" />
          </Form.Group>
          <ButtonSave text = 'Save'/>
        </Form> 
    </Modal.Body>
</Card>
      </Modal>
      </ >
        
    )
}
