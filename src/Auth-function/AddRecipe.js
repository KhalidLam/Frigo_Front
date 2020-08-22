
import React, { useState, useEffect, useContext } from "react";
import Nav from "./Nav";
import axios from 'axios';
import TimePicker from 'react-time-picker';

export default function AddRecipe() {

    const [products, setProduct] = useState([])
    const [productList, setProductList] = useState([])
    const [time, setTime] = useState('10:10')

    useEffect(() => {
        axios.get('http://localhost:1000/api/products').then(response => {
            setProduct(response.data.success)
        }).catch((error) => {
            console.log('error ' + error);
        });
        console.log(localStorage.frigoId + 'rrrrrrr')
        console.log(products);

    }, []);
    const ChangeEvent = (e) => {
        setProductList([...productList, e.target.value])
        console.log(productList);

    }
    const SubAdd = async (e) => {
        e.preventDefault();
        const api = axios.create({
            baseURL: `http://localhost:1000/api/recipe/`
        })
        // const selectedIndex = target.options.selectedIndex
        // var key = target.options[selectedIndex].getAttribute('data-key');
        // setProductFr({ ...productFr, key, stock , frigoId })
        // await api.post("/", {

        //     product_id: key,
        //     frigo_id : localStorage.frigoId ,
        //     stock: stock , 
        // }).then((res) => {
        //     console.log(res);
        // })
        //     .catch((err) => {
        //         console.log(err + " 😱 rrrr");
        //     });
        // console.log(key);
        // console.log(productFr);

    }
    // const style = {

    //     position: absolute;
    //     top: 50%;
    //     -webkit-transform: translateY(-50%);
    //     transform: translateY(-50%);
    //     -webkit-transition: color 0.2s;
    //     transition: color 0.2s;
    //     color: rgba(0, 0, 0, 0.87);
    //     pointer-events: none,

    //     left: 16px;
    //     right: initial


    // }


    return (
        <>
            {/* <Nav /> */}
            <div className='col-4 container p-5' style={{ backgroundColor: '#00c4ffb0' }} >
                <h2 className=' mb-5'> Add Recipe </h2>
                <form onSubmit={(e) => SubAdd(e)}   >
                    <div className="form-group col-md-10">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder='name' />
                    </div>

                    <div className="form-group col-md-10">
                        <label for="exampleFormControlTextarea1">Step by step </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="form-group col-md-10">
                        <select className="custom-select"
                            onChange={ChangeEvent}>
                            <option hidden selected>Choose...</option>
                            {/* //products c la data d'apres la requette  */}
                            {products.map((product) =>
                                <option key={product.id} data-key={product.id}  >{product.name}</option>
                            )}
                        </select>
                    </div>
                    
                    <div className="input-group col-md-10">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                            <label className="custom-file-label" for="inputGroupFile04">Choose Picture </label>
                        </div>
                    </div>

   <div className="input-group col-md-10 mt-5">
                        <TimePicker
                            onChange={time => setTime(time)}
                            value={time}
                        />
                    </div>
                    <div className="form-group row mt-5">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Add Recipe </button>
                        </div>
                    </div>
                </form>

                <ul>
                    {
                        productList.map((product, i) =>
                            <li key={i} > {product} </li>
                        )}
                </ul>
            </div>
        </>


    )
}
