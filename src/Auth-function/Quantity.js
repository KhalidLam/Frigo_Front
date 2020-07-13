import React, { Component } from 'react'
import { FcCheckmark } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { getAllProduct, AddProductFrigo, DeleteProductFrigo } from "../Components/FrigoFunction";
export default class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      show: true
    };
  }



 

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  Valide = ()=>{
    localStorage.setItem("productId", this.props.IdProduct);
    localStorage.setItem("quantity", this.state.clicks);
    localStorage.setItem("type",  this.props.type);
    AddProductFrigo().then((res) => {
      console.log(res);
      // console.log(type);
  }).catch((err) => {
      console.log(err + " 😱 rrrr");
  })
  }

 deleteProduct = (e) => {
    
    localStorage.setItem( 'deleteId', this.props.IdProduct);
  
    DeleteProductFrigo().then((res) => {
        console.log(res)
      })
  } 
 

  render() {
    return (
      <>
        <div className=' ml-3 d-flex justify-content-around'>
          <button onClick={this.DecreaseItem}  className='text-danger ' style={{ fontSize: '22px'}} > - </button>
          {/* {this.state.show ? */}
           <h2 style={{ marginTop: '10px' }}> {this.state.clicks} </h2>
            {/* // : ''} */}
          <button onClick={this.IncrementItem} className='text-success ' style={{ fontSize: '20px'}} > + </button>
        </div>

        <FcCheckmark 
        style={{ width: '20px', height: '20px', marginTop: '7px', cursor: 'pointer' }}
         onClick = {this.Valide} 
         />
        

        <FaTimes
         style={{ width: '20px', height: '20px', color: 'red', marginTop: '7px', cursor: 'pointer' }}
         onClick = {this.deleteProduct } 
         />

      </>
    );
  }
}