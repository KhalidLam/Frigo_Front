import React, { useState, useEffect, useContext } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/core";
import { Formik, Field } from 'formik';
import axios from 'axios';
import Nav from "./Nav";
import ThemeContext from "./ThemeContext";
import { getAllProduct, AddProductFrigo } from "../Components/FrigoFunction";

export default function AddProduct() {

    const [product, setProduct] = useState([])
    const [target, setTarget] = useState()
    const [quantity, setQuantity] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        getAllProduct().then(response => {
            console.log(response.data.success);
            setProduct(response.data.success)
        }).catch((error) => {
            console.log('error ' + error);
        });
        console.log(localStorage.frigoId + 'rrrrrrr')
    }, []);




    const SubAdd = async (e) => {
        e.preventDefault();
        const selectedIndex = target.options.selectedIndex ; 
        var key = target.options[selectedIndex].getAttribute('data-key');
        localStorage.setItem("productId", key);
        localStorage.setItem("quantity", quantity);
        localStorage.setItem("type", type);

        AddProductFrigo().then((res) => {
            console.log(res);
            // console.log(type);
        }).catch((err) => {
            console.log(err + " 😱 rrrr");
        })
    }

    return (
        <>
            <Nav />
            <form  onSubmit={(e) => SubAdd(e)} className='col-4 container' style={{ backgroundColor: '#00c4ffb0' }}>


                <div className="form-group col-md-10">
                    <label for="formGroupExampleInput"> Product </label>
                    <select className="custom-select"
                        onChange={(e) => { setTarget(e.target) }}>
                        <option hidden selected>Choose...</option>
                        {product.map((product) =>

                            <option key={product.id} data-key={product.id}  >{product.name}</option>
                        )
                        }
                    </select>
                </div>
                <div className="form-group col-md-10">
                    <label for="formGroupExampleInput">Quantity</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder='quantity' onChange={(e) => { setQuantity(e.target.value) }} />
                </div>
                <div className="form-group col-md-10">
                    <label for="formGroupExampleInput">Type of Quantity</label>
                    <select className="custom-select" onChange={(e) => { setType(e.target.value) }}>
                        <option selected hidden>Choose... </option>

                        <option >(U)nité </option>
                        <option >(L)itre </option>
                        <option > (G)ramme</option>

                    </select>
                </div>

                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary"> Add Product </button>
                    </div>
                </div>
            </form>

        </>





    )
}