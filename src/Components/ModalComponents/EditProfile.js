import React, { useState, useEffect } from 'react'
import { Button, Modal, ListGroupItem, ListGroup, Form, Card, FormCheck } from 'react-bootstrap';
import { getProfile, EditProfile } from '../UserFunction';
import Nav from '../Nav';
export default function EditProfile1() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ProfileName, setProfileName] = useState()
  const [ProfileEmail, setProfileEmail] = useState()
  const [User, setUser] = useState({})
  const [selectedImage, setselectedImage] = useState()
  const [data, setData] = useState({})


  const [dataProfile, setDataProfile] = useState({})
  const [Show1, setShow1] = useState(false)
  useEffect(() => {
    getProfile().then(res => {
      console.log(res.data.success);
      // setProfile ({ name : res.data.success.name, email : res.data.success.email,  
      //   avatar : res.data.success.avatar, 
      //   create : res.data.success.created_at,  
      // })
      setUser(res.data.success)
      console.log(res.data.success.profile);
      console.log(res.data.success.profile.prenom);
      console.log(res.data.success.profile.nom);


      // setProfileCreate(res.data.success.created_at) 
    }).catch((err) => {
      console.log(err.message);
    })

  }, [])

  const fileInput = React.createRef();
  const onFileChange = (event) => {
    // console.log(event.target.files[0]);
    // setSelectedFile(event.target.files[0]);
    setselectedImage(fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const DataNewProfile = {
    name: data.pseudo,
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    age: data.age,
    sexe: data.sexe,
    taille: data.taille,
    poids: data.poids,
    image: selectedImage,
    userId: localStorage.userId
  }
  const SubEditProfile = (e) => {
    e.preventDefault();
    EditProfile(DataNewProfile).then(res => {
      console.log(res);
      handleClose()
      // setUser(res.data)
      setShow1(!Show1)
    }).catch((err) => {
      console.log(err.message);
    })
  }
  const handelChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
    console.log(data);
  }

  return (
    <>

<Nav />
      <div className = ' container '>
  

    
       
            <Card.Title  >  Bonjour {User.name}</Card.Title> 
            <div className= 'container d-flex justify-content-around row no-gutters'>
    <div  class="col-md-4 ">
       <Card.Img className = 'mt-5 ml-2' style={{width:"250px" }}  src={`http://localhost:1000/${User.avatar}`} />  
       </div>  
        
       <div  class="col-md-8">   
          <ListGroup className="list-group-flush ml-3 px-5">
            <ListGroupItem> Pseudo : {User.name} </ListGroupItem>
            {User.profile &&
              <>
                <ListGroupItem> Prénom : {User.profile.prenom} </ListGroupItem>
                <ListGroupItem>  Sexe : {User.profile.sexe} </ListGroupItem>

                <ListGroupItem> Nom : {User.profile.nom} </ListGroupItem>
                <ListGroupItem> Email :  {User.email} </ListGroupItem>
                <ListGroupItem>  Age : {User.profile.age} ans </ListGroupItem>
                <ListGroupItem> Tille : {User.profile.taille} cm </ListGroupItem>
                <ListGroupItem>  Membre depuis : {User.profile.created_at} </ListGroupItem>
              </>
            }
          </ListGroup>
          </div> 
            </div>
        
   </div>
       <Form.Group className='add' >
          <Button variant="success" onClick={handleShow}>
            Modifier
            </Button>
        </Form.Group>

     




      <Modal show={show} onHide={handleClose} style = {{borderRadius: '20px'}} id = 'modal'>
       
        <Card  style={{ backgroundColor: '#eb4a36'      , color: 'white' }}>
          <Modal.Body  >

            <Card.Img variant="top" src={`http://localhost:1000/${User.avatar}`} className = 'rounded'
            style={{ width: '50%'  }} 
            />
            <Form className='col-10 p-4'
              onSubmit={(e) => SubEditProfile(e)} action=''
              action=''>

              <Form.Group controlId="image"   >
                <Form.File
                  label="Modifier l'image"
                  ref={fileInput}
                  onChange={onFileChange}
                  aria-describedby="inputGroupFileAddon04" />
              </Form.Group>

              <Form.Group controlId="pseudo">
                <Form.Label>  Pseudo </Form.Label>
                <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' onChange={(e) => { setUser({ ...User, name: e.value }) }} value={User.name} />
              </Form.Group>

              <Form.Group controlId="prenom">
                <Form.Label>  Prénom  </Form.Label>
                <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' onChange={handelChange} />
              </Form.Group>

              <Form.Group controlId="nom">
                <Form.Label>  Nom </Form.Label>
                <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' onChange={handelChange} />
              </Form.Group>

              <Form.Label> Sexe  </Form.Label>
              <Form.Group controlId="sexe" className='d-flex justify-content-around'>
                <div className='d-flex'>  <FormCheck style={{ backgroundColor: '#eb4a36' }} name='sexe' type='radio' className='input' value='Femme' onChange={handelChange} />
              Femme </div>
                <div className='d-flex' > <FormCheck style={{ backgroundColor: '#eb4a36' }} name='sexe' type='radio' className='input' value='Homme' onChange={handelChange} />
              Homme </div>
              </Form.Group>

              <Form.Group controlId="age">
                <Form.Label> Age  </Form.Label>
                <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' onChange={handelChange} />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>  Email </Form.Label>
                <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' value={User.email} />
              </Form.Group>

              <Form.Group controlId="poids">
                <Form.Label>  Poids </Form.Label>
                <Form.Control style={{ backgroundColor: '#eb4a36' }} type='number' className='input' onChange={handelChange} />
              </Form.Group>

              <Form.Group controlId="taille">
                <Form.Label> Taille </Form.Label>
                <Form.Control style={{ backgroundColor: '#eb4a36' }} type='number' className='input' onChange={handelChange} />
              </Form.Group>

              <Form.Group className='d-flex justify-content-center' >
                <Button variant="warning" className='add' type="submit">
                  Save
             </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Card>



      </Modal>

    </>
  );
}



