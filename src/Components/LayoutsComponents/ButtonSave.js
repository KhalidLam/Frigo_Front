import React from 'react'
import { Form, Container, Button , Card } from 'react-bootstrap'
export default function ButtonSave(props) {
    return (
        <Form.Group className='d-flex justify-content-center ' >
        <Button  className=  {`add px-4 ${props.color}`}   variant ={props.variant} type="submit"  >
          {props.text}
</Button> 
    </Form.Group>
    )
}
