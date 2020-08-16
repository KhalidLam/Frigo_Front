import React from 'react'
import { FcPlus } from 'react-icons/fc'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ButtonAddRecipe() {
    return (
        <div className="uk-width-1-3@m uk-text-right@m uk-light">

        <Form.Group className='d-flex justify-content-center' >
          <Link to='/AddNewRecipe' className='add d-flex btn-success p-2 '
            style={{ textDecoration: 'none' }}>
            <FcPlus className='mt-1  text-dark' /> <span className='title3 text-dark' >Ajouter une recette</span>
          </Link>
        </Form.Group>
      </div>
    )
}
