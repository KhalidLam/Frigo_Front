import React from 'react'
import { Form, Container, Button , Card } from 'react-bootstrap'
export default function ButtonSave(props) {
    return (
        <Form.Group className='d-flex justify-content-center ' >
        <Button variant="warning" className='add px-5 ' type="submit">
          {props.text}
</Button>
    </Form.Group>
    )
}
