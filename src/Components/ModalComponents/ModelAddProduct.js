import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import{ getAllProduct ,AddProductFrigo, }from "../FrigoFunction" ;

export default function ModelAddProduct() {
  const [products, setProduct] = useState([])
  const [target, setTarget] = useState()
  const [quantity, setQuantity] = useState()
  const [type, setType] = useState()

  useEffect( async() => {
    getAllProduct().then(response => {
      console.log(response.data.success);
      setProduct(response.data.success)
    }).catch((error) => {
      console.log('error ' + error);
    });
  },[]);



  const SubAdd = async (e) => {
    e.preventDefault();
  const selectedIndex = target.options.selectedIndex
 var key = target.options[selectedIndex].getAttribute('data-key');
 localStorage.setItem("productId", key );
 localStorage.setItem("quantity", quantity );
 localStorage.setItem("type", type );
        
 AddProductFrigo().then((res) => {
 console.log(res);
     // console.log(type);
 }).catch((err) => {
         console.log(err + " 😱 rrrr");
     })
     }

    return (
    <>
      <a href="#" className="uk-button uk-button-primary uk-margin-top" data-toggle="modal" data-target="#staticBackdrop1" style={{ backgroundColor: 'rgb(83, 177, 12)', color: ' #f8f9fa' }} >
        Ajouter un Produit
         </a>
      {/* model element to add product  */}
      <div className="modal fade" id="staticBackdrop1" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel" style={{ color: 'black' }}> Ajouter un produit au frigo </h5>

              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <form onSubmit={(e) => SubAdd(e)} >
                <div className="form-group" >
                  <label for="formGroupExampleInput"> Produit  </label>
                  <select className="custom-select"
                    onChange={(e) => { setTarget(e.target) }}>
                    <option hidden selected>Choose...</option>
                    {products.map((product) =>

                      <option key={product.id} data-key={product.id}  >{product.name}</option>
                    )
                    }
                  </select>
                </div>

                <div className="form-group" >
                  <label for="formGroupExampleInput">Quantité</label>
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder='quantity' onChange={(e) => { setQuantity(e.target.value) }} />
                </div>

                <div className="form-group ">
                  <label for="formGroupExampleInput"> Type de quantité </label>
                  <select className="custom-select" onChange={(e) => { setType(e.target.value) }}>
                    <option selected hidden>Choose... </option>

                    <option >(U)nité </option>
                    <option >(L)itre </option>
                    <option > (G)ramme</option>

                  </select>
                </div>

                <div className="modal-footer">

                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                  <button type="submit" class="btn btn-primary"> Ajouter </button>
                </div>

              </form>
            </div>
            {/* end model add product */}
            {/* <button type="button" onClick={AddProduct} className="btn btn-primary"> Save </button> */}
          </div>
        </div>
      </div>
    </>
  )
    
}
