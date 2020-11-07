import React from 'react';
import Axios from 'axios';



//tout les recettes

export  const getCategory = async () => {
    return await Axios.get('http://localhost:1000/api/categoryRecette') 
}
export  const getAllRecettes = async () => {
    return await Axios.get('http://localhost:1000/api/recettes',{
        headers : {
      'Authorization': 'Bearer ' + localStorage.usertoken ,
      'Content-Type': 'application/json'
  } 
}) 
}
//add new recipe
export  const AddRecipe = async (data) => {  
    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("description", data.description);
    formData.append("image", data.image );
    formData.set("time", data.time);
    formData.set("number", data.number );
    formData.set("category_id", data.category_id); 
    const api = Axios.create({
           baseURL: `http://localhost:1000/api/recette`,
           headers: {
            'Authorization': 'Bearer ' + localStorage.usertoken  ,
            'Content-Type': 'application/json'
        }
       })
       return  await  api.post("/",  formData ) 
     }

     export  const DeleteRecipe = async (recette_id) => {  
    console.log(recette_id);
      const api = Axios.create({ 
             baseURL: `http://localhost:1000/api/recette/${recette_id}`,
             headers: {
              'Authorization': 'Bearer ' + localStorage.usertoken  ,
              'Content-Type': 'application/json'
          }
         })
         return  await  api.delete("/"  ) 
       }


  //recettes
export  const getFilterRecettes = async () => {
    return await Axios.get(`http://localhost:1000/api/recettesHome/${localStorage.frigoId}`) 
}
//mes recettes
export  const getMesRecettes = async () => {
    return await Axios.get(`http://localhost:1000/api/mesrecettes/${localStorage.userId}`,{
        headers : {
      'Authorization': 'Bearer ' + localStorage.usertoken ,
      'Content-Type': 'application/json'
  } 
})
}
//mes favoris 
export  const getMesFavoris = async (iconId) => {
  return await Axios.get(`http://localhost:1000/api/favoris?recettes_id=[${iconId}]`,{
    // return await Axios.get(`http://localhost:1000/api/favoris?recettes_id=[70,71]`,{
      headers : {
    'Authorization': 'Bearer ' + localStorage.usertoken ,
    'Content-Type': 'application/json'
} 
})
}
 //search
export  const getSearch = async (search) => {
    return await Axios.get(`http://localhost:1000/api/search?word=${search}`) 
}
 
//CRUD Product Recipe
export  const getAllProduct = async () => {
    return  await Axios.get(` http://localhost:1000/api/product`)
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
    )}

export  const DeleteProductRecipe = async (data) => {  
    const api = Axios.create({
      baseURL:`http://localhost:1000/api/recette/product/${data.productId}?recette_id=${data.recetteId}` ,
      headers: {
       'Authorization': 'Bearer ' + localStorage.usertoken  ,
       'Content-Type': 'application/json'
   }
  })
  return  await  api.delete("/") 
  }

//recipe
export  const getRecipeWithProduct = async (recette_id) => {
    return  await Axios.get(`http://localhost:1000/api/recette/${recette_id}`)
}



//CRUD Product Liste 
  export  const getListe  = async () => { 
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/liste/${localStorage.userId}`,
        headers: {
         'Authorization': 'Bearer ' + localStorage.usertoken ,
         'Content-Type': 'application/json'
         }
    })
    return  await  api.get("/" ) 
  }
 
   export  const AddToListe = async (Ingredient) => {
  const api = Axios.create({
        baseURL: `http://localhost:1000/api/liste/`,
        headers: {
         'Authorization': 'Bearer ' + localStorage.usertoken  ,
         'Content-Type': 'application/json'
     }
    })
    return  await  api.post("/", {"product_id" : Ingredient}  ) 
  }

 export  const  AddListeToFrigo = async (Liste) => { 
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/liste/frigo`,
        headers: {
         'Authorization': 'Bearer ' + localStorage.usertoken ,
         'Content-Type': 'application/json'
     }
    })
    return  await  api.post("/", {"product_id" : Liste , "frigo_id" :localStorage.frigoId}  ) 
  }

  export  const RemoveProductfromFrigo = async (Ingredient) => { 
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/post`,
        headers: {
         'Authorization': 'Bearer ' + localStorage.usertoken ,
         'Content-Type': 'application/json'
     }
    })
    return  await  api.post("/", {"product_id" : Ingredient
    // [
    //   { 'id':34 , 'quantity':  1},
    //   { 'id': 16 , 'quantity': 1 }
    // ] 
    , "frigo_id" :3 }  ) 
  }

  export  const DeleteAllProductOfListe  = async ( ) => {  
      const api = Axios.create({
          baseURL: `http://localhost:1000/api/liste`,
          headers: {
           'Authorization': 'Bearer ' + localStorage.usertoken ,
           'Content-Type': 'application/json'
       }
      }) 
      return  await  api.delete("/" ) 
    }
    
  export  const DeleteProductOfListe = async (product_id) => {  
    const api = Axios.create({
        baseURL: `http://localhost:1000/api/liste?product_id=${product_id}`,
        headers: {
         'Authorization': 'Bearer ' + localStorage.usertoken ,
         'Content-Type': 'application/json'
     }
    }) 
    return  await  api.delete("/" )  
  }
     // return product_id ; 
      //  return  await  api.delete("/" ) 
    //   }
    //   else{
    //     const api = Axios.create({
    //       baseURL: `http://localhost:1000/api/liste`,
    //       headers: {
    //        'Authorization': 'Bearer ' + localStorage.usertoken ,
    //        'Content-Type': 'application/json'
    //    }
    //   })
    //   return 'not ok ' ;
    //       //  return  await  api.delete("/", {"product_id" : product_id}  )  
    //   // return  await  api.delete("/" ) 
    // }
  