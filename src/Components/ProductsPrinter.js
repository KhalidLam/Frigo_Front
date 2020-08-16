import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { FaTimes } from "react-icons/fa";
import useContext from "./LayoutsComponents/ThemeContext"
import {  DeleteProductOfListe } from './FunctionComponents/RecetteFunction';

export default class ProductsPrinter extends Component {

    constructor(props) {
        super(props) 
    //  this.state = {delete : this.props.delete } 
      this.state = { change : this.props.change };
      this.state = { setChange :  this.props.setChange };

    } 
    // clickDelete = (product_id) => {
    //     console.log(product_id);
    //     this.props.delete(product_id)
    // }
      
    DeleteProduct = (product_id) => {
        console.log(product_id);
        localStorage.setItem('deletProductId' ,product_id)
        DeleteProductOfListe(product_id).then((res) => {
           this.setState({Show:  true })
        //    this.setState({setChange:  !this.change})
           this.props.setChange(!this.props.change )
        //    clickDelete(this.Change)
        //    this.props.change(product_id)
            console.log(res);
          }).catch((err) => {
            console.log(err.message);
          })
  }
    render() {
        return (
            <ListGroup className="list-group-flush d-flex justify-content-center  ">
            {this.props.products.map(Product =>

                <ListGroupItem className = 'd-flex justify-content-between'>
                    {Product.quantity + ' (' + Product.type + ')' + Product.product_name  }
                <FaTimes
                  style={{ width: '20px', height: '20px', color: 'red', marginTop: '7px', cursor: 'pointer' }}
              onClick = { () => this.DeleteProduct(Product.product_id) }    
                /> 
                  </ListGroupItem>
                 
            )}  
            </ListGroup> 
        )
    }
}
 