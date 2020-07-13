import React from 'react'
import axios from 'axios';


export  const getAllProduct = async () => {
    return  await axios.get(` http://localhost:1000/api/product`)
}
  
export  const AddProductFrigo = async () =>{   
 const api = axios.create({
    baseURL: `http://localhost:1000/api/frigo/product/`
})
 return ( await api.post("/", {

    product_id:localStorage.productId,
    frigo_id: localStorage.frigoId,
    quantity: localStorage.quantity ,
    type: localStorage.type
})
 )
}

export const GetProductFrigo = async() => {

   return( await  axios.get(`http://localhost:1000/api/frigo?frigo_id=${localStorage.frigoId}`)  )
        //   if(response.status === 200 && frigoProducts ){
        //     console.log(frigoProducts)
        //     setShowImage(true) 
    }  

export const DeleteProductFrigo = async() => {
  return( await axios.delete(`http://localhost:1000/api/frigo?product_id=${localStorage.deleteId}&frigo_id=${localStorage.frigoId}`)  ) 

}


export const UploadFrigoImage = async() => {
    const token = "Bearer " + localStorage.getItem("userToken");
  
    return( await axios.post("http://localhost:1000/api/frigo/photo", localStorage.formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    }
  }) 
  )}


// export const register = (newUser) => {
//     return axios
//       .post(url + "api/v1/register", newUser, {
//         headers: { "content-type": "application/json" },
//       })
//       .then((res) => {
//         console.log(res);
//         return res;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
