import React from 'react';
import Axios from 'axios';


export  const getCategory = async () => {

    return await Axios.get('http://localhost:1000/api/categoryRecette') 
     
}


export  const AddRecipe = async (data) => {  

    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("description", data.description);
    formData.append("image", data.image );
    formData.set("time", data.time);
    formData.set("number", data.number );
    formData.set("category_id", data.category_id); 
 
   
 
        const api = Axios.create({
           baseURL: `http://localhost:1000/api/recette`
       })
       return  await      api.post("/",  formData ) 
     }


export  const getAllProduct = async () => {
    return  await Axios.get(` http://localhost:1000/api/product`)
}

  
export  const getRecipeToAddProduct = async (recette_id) => {
    return  await Axios.get(`http://localhost:1000/api/recette/${recette_id}`)
}


export  const AddProductRecipe = async (data) => {  
 
    const formData = new FormData();
    formData.set("product_id",data.productId);
    formData.set("recette_id",data.recetteId);
    formData.set("type", data.type);
    formData.set("quantity", data.quantity);
    
    return ( await  Axios({
            method: 'post',
            url: 'http://localhost:1000/api/recette/product/',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
    ) 
   }



