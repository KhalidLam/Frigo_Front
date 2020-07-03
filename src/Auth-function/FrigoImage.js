import React, { useState, useEffect } from "react";

import Axios from "axios";
import Nav from "./Nav";

export default function FrigoImage() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [items, setItems] = useState([]);

    const [show, setShow] = useState(null);
    const fileInput = React.createRef();
    const onFileChange = (event) => {
      // console.log(event.target.files[0]);
      // setSelectedFile(event.target.files[0]);
      setSelectedFile(fileInput.current.files[0]);
      console.log(fileInput.current.files[0]);
    };
    useEffect(() => {
      const token = "Bearer " + localStorage.getItem("userToken");
      Axios.get("http://localhost:1000/api/img", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
        .then((res) => {
          console.log(res);
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  
      console.log("didmount");
    }, [show]);
  
    const onFileUpload = async () => {
      const token = "Bearer " + localStorage.getItem("userToken");
      const formData = new FormData();
      
      formData.append("photo", selectedFile);
      formData.append("frigo_id", localStorage.frigoId);

      await Axios.post("http://localhost:1000/api/frigo/photo", formData , {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
 
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // setShow(!show);
    };
  return (
    <>
    <Nav />
<div className='col-4 container p-5' style={{backgroundColor : '#00c4ffb0'}}>
  <h2 className='mb-4'> add frigo picture </h2>
    <div className="input-group  ">
    <div className="custom-file">
        <input type="file"     ref={fileInput}   onChange={onFileChange} className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
        <label className="custom-file-label" for="inputGroupFile04">Choose Picture </label>
    </div>
</div>
 <div class="form-group row">
 <div class="col-sm-10">
     <button    onClick={onFileUpload} class="btn btn-primary"> Add Picture </button>
 </div>
</div>
</div>
</>
  )
}
