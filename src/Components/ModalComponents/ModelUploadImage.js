import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";


export default function ModelUploadImage() {
  const fileInput = React.createRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [render, setRender] = useState(false)

  const onFileChange = (event) => {
    // console.log(event.target.files[0]);
    // setSelectedFile(event.target.files[0]);
    setSelectedFile(fileInput.current.files[0]);
    // localStorage.setItem("selectedFile" ,selectedFile)
    console.log(fileInput.current.files[0]);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFileUpload = async () => {
    const token = "Bearer " + localStorage.getItem("userToken");
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("frigo_id", localStorage.frigoId);
    
    localStorage.setItem("formData", formData)
    await axios.post("http://localhost:1000/api/frigo/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },

    }).then((res) => {
      setShow(false);
      console.log(render)
      // props.history.push('/frigo')
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ backgroundColor: '#e43636', color: ' #f8f9fa' }}>
        Edit Image
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier l'image du frigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div className="input-group  ">
            <div className="custom-file">
              <input type="file" ref={fileInput}
                onChange={onFileChange} className="custom-file-input"
                id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
              <label className="custom-file-label" for="inputGroupFile04">Choose Picture </label>
            </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={onFileUpload} >
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//     return (
//             <>
//               <a href="#" className="uk-button uk-button-primary uk-margin-top"
//                data-toggle="modal" data-target="#staticBackdrop"
//                 style={{ backgroundColor: '#e43636', color: ' #f8f9fa' }}>
//                 Modifier l'image 
//             </a>
//               <div className="modal fade" id="staticBackdrop" 
//               data-backdrop="static" tabindex="-1"
//                role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5 className="modal-title" id="staticBackdropLabel"> Modifier l'image du frigo </h5>
//                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                       </button>
//                     </div>
//                     <div className="modal-body">

//                       <div className="input-group  ">
//                         <div className="custom-file">
//                           <input type="file" ref={fileInput}
//                            onChange={onFileChange} className="custom-file-input"
//                             id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
//                           <label className="custom-file-label" for="inputGroupFile04">Choose Picture </label>
//                         </div>
//                       </div>

//                     </div>
//                     <div className="modal-footer">
//                       <button type="button" className="btn btn-secondary" data-dismiss="modal" > Cancel </button>
//                       <button type="button" onClick={onFileUpload} className="btn btn-primary"   data-dismiss="modal"> Save </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//     )
// }
