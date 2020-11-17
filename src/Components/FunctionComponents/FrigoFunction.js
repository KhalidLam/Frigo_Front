import axios from "axios";

export const getAllProduct = async () => {
  return await axios.get(` http://localhost:1000/api/product`);
};

export const AddProductFrigo = async (data) => {
  const api = axios.create({
    baseURL: `http://localhost:1000/api/frigo/product/`,
  });
  return await api.post("/", {
    product_id: data.productId,
    frigo_id: data.frigoId,
    quantity: data.quantity,
    type: data.type,
  });
};

export const GetProductFrigo = async () => {
  return await axios.get(
    `http://localhost:1000/api/frigo?frigo_id=${localStorage.frigoId}`
  );
};

export const DeleteProductFrigo = async () => {
  return await axios.delete(
    `http://localhost:1000/api/frigo?product_id=${localStorage.deleteId}&frigo_id=${localStorage.frigoId}`
  );
};

export const UploadFrigoImage = async () => {
  const token = "Bearer " + localStorage.getItem("userToken");

  return await axios.post(
    "http://localhost:1000/api/frigo/photo",
    localStorage.formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    }
  );
};
