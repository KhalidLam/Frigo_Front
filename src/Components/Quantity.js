import React, { Component, useContext ,  useState } from 'react'
import { FcCheckmark } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { getAllProduct, AddProductFrigo, DeleteProductFrigo } from "../Components/FrigoFunction";
 
import ThemeContext from './ThemeContext'
export default function Quantity(props) {

const { render , setRendering  } = useContext( ThemeContext );

  const [clicks, setclicks] = useState(1)
  const [show, setShow] = useState(false)

  const IncrementItem = () => {
    setclicks(clicks + 1)
  }
  const DecreaseItem = () => {
    setclicks(clicks - 1)
  }
const   ToggleClick = () => {
    setShow(!show)
  }

 const Valide = () => {
 

    const DataProductFrigo =
    {
      productId: props.IdProduct,
      quantity: clicks,
      frigoId: localStorage.frigoId,
      type: props.type
    }

    AddProductFrigo(DataProductFrigo).then((res) => {
      console.log(res);
      setRendering(!render)
    }).catch((err) => {
      console.log(err + " 😱 rrrr");
    })
  }

 const deleteProduct = (e) => {
    localStorage.setItem('deleteId', props.IdProduct);
    DeleteProductFrigo().then((res) => {
      setRendering(!render)
      console.log(res)
    })
  }




    return (
      <>
        <div className=' ml-3 d-flex justify-content-around'>
          <button onClick={DecreaseItem} className='text-danger ' style={{ fontSize: '22px' }} > - </button>
          {/* {this.state.show ? */}
          <h2 style={{ marginTop: '10px' }}> {clicks} </h2>
          {/* // : ''} */}
          <button onClick={IncrementItem} className='text-success ' style={{ fontSize: '20px' }} > + </button>
        </div>

        <FcCheckmark
          style={{ width: '20px', height: '20px', marginTop: '7px', cursor: 'pointer' }}
          onClick={Valide}
        />


        <FaTimes
          style={{ width: '20px', height: '20px', color: 'red', marginTop: '7px', cursor: 'pointer' }}
          onClick={deleteProduct}
        />
      </>
    )
  
}
