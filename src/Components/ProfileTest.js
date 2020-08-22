import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem, Form, Button, FormCheck } from 'react-bootstrap'
import { getProfile, EditProfile } from './FunctionComponents/UserFunction';
import Nav from './LayoutsComponents/Nav'

export default function Profile() {
  const [ProfileName, setProfileName] = useState()
  const [ProfileEmail, setProfileEmail] = useState()
  const [Profile , setProfile ] = useState({}) 
  const [selectedImage, setselectedImage] = useState()
  const [data, setData] = useState({})
  const [dataProfile, setDataProfile] = useState({})
  const [Show, setShow] = useState(false)
  useEffect(() => {
    getProfile().then(res => {
      console.log(res.data.success);
      setProfile ({ name : res.data.success.name,
        email : res.data.success.email,  
        avatar : res.data.success.avatar, 
        create : res.data.success.created_at, 
      })
      // setProfileEmail(res.data.success.email)
      // setProfileCreate(res.data.success.created_at)

    }).catch((err) => {
      console.log(err.message);
    })

  }, [Show])

  const fileInput = React.createRef();
  const onFileChange = (event) => {
    // console.log(event.target.files[0]);
    // setSelectedFile(event.target.files[0]);
    setselectedImage(fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const DataNewProfile = {
    name : data.pseudo,
    nom : data.nom, 
    prenom : data.prenom,
    email : data.email,
    age : data.age,
    sexe : data.sexe,
    taille : data.taille,
    poids : data.poids,
    // image : selectedImage,
    userId :  localStorage.userId
  }
  const SubEditProfile = (e) => {
    e.preventDefault();
    EditProfile(DataNewProfile).then(res => {
      console.log(res);
      setProfile(res.data.success)
      setShow(!Show)
    }).catch( (err) => {
      console.log(err.message);
    }) 
  }
  const handelChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
    console.log(data);
  }
  var dateFormat = require('dateformat');
  return (
    <>
      {/* <Nav /> */}
      <div className='d-flex justify-content-center'>
        <Form className='col-12 p-4' >
          <Card style={{ width: '18rem' }}>
            <>
              <Card.Img variant="top" src={`http://localhost:1000/${Profile.avatar}`} />


              <Card.Body>
                <Card.Title>  Bonjour {Profile.name}</Card.Title>
                <Card.Text>

                </Card.Text>
              </Card.Body>

              <ListGroup className="list-group-flush">
                <ListGroupItem>  {Profile.Email} </ListGroupItem>
              </ListGroup>

            </>
            <Form.Group className='add' >
              <Button variant="success" type="submit">
                Modifier
            </Button>
            </Form.Group>
          </Card>
        </Form>
      </div>
      <div className="uk-width-1-2@m">
        <Card style={{ backgroundColor: '#eb4a36', borderRadius: '20px', color: 'white' }}>
          <Card.Img variant="top" src={`http://localhost:1000/${Profile.avatar}`} style={{ width: '50%' }} />
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
              <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' onChange={(e) => { setProfile({...Profile, name : e.value}) }} value={Profile.name} />
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
              <div className='d-flex'>  <FormCheck style={{ backgroundColor: '#eb4a36' }} 
              name='sexe' type='radio' className='input' value='Femme' onChange={handelChange} />
              Femme </div>
              <div className='d-flex' > <FormCheck style={{ backgroundColor: '#eb4a36' }} 
              name='sexe' type='radio' className='input' value='Homme' onChange={handelChange} />
              Homme </div>
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label> Age  </Form.Label>
              <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' onChange={handelChange} />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>  Email </Form.Label>
              <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input' value={ProfileEmail} />
            </Form.Group>

            <Form.Group controlId="poids">
              <Form.Label>  Poids </Form.Label>
              <Form.Control style={{ backgroundColor: '#eb4a36' }} type='number' className='input' onChange={handelChange} />
            </Form.Group>

            <Form.Group controlId="taille">
              <Form.Label> Taille </Form.Label>
              <Form.Control style={{ backgroundColor: '#eb4a36' }} type='number' className='input' onChange={handelChange} />
            </Form.Group>

            {/* <Form.Group controlId="membre">
              <Form.Label> Membre depuis  </Form.Label>
              <Form.Control style={{ backgroundColor: '#eb4a36' }} className='input'  value = {dateFormat(new Date( '2020-08-05 16:15:48'  ), "dddd, mmmm dS, yyyy, h:MM:ss TT")} />
            </Form.Group>  */}

            <Form.Group className='d-flex justify-content-center' >
              <Button variant="warning" className='add' type="submit">
                Save
             </Button>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </>
  )
}
