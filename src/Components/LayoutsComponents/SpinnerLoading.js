import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function SpinnerLoading(text) {
    return (
        <div className=' uk-margin-large-top uk-flex-center' style={{ textAlign: 'center' }}>
        <Spinner animation= {text} />
        </div>  
    )
}
