import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ButtonAddRecipe() {
    return (
        <div className="uk-width-1-3@m uk-text-right@m uk-light">

        <Form.Group className='d-flex justify-content-center' >
          <Link to='/AddNewRecipe' className='add d-flex btn  p-2 '
            style={{ textDecoration: 'none' , backgroundColor : '#eb4a43', color : 'white'}}>
            <FiPlus className='mt-1   ' />
             <span  >Ajouter une recette</span>
          </Link>
        </Form.Group>
      </div>
    )
}
