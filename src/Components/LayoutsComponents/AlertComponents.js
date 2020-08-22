import React from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AlertComponents(props) {
    return (
        <Alert variant= {props.variant}>
        {props.text}
  <Link to="/liste" className = 'font-weight-bold' style = {{textDecoration : 'none'}}> {props.link}</Link>  
      
      </Alert>
    )
}
