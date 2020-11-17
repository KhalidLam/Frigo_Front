import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

export default function ModelUploadImage() {
  const fileInput = React.createRef();

  const [show, setShow] = useState(false);
  const [render] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFileChange = (event) => {
    setSelectedFile(fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const onFileUpload = async () => {
    const token = "Bearer " + localStorage.getItem("userToken");
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("frigo_id", localStorage.frigoId);

    localStorage.setItem("formData", formData);
    await axios
      .post("http://localhost:1000/api/frigo/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((res) => {
        setShow(false);
        console.log(render);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "#e43636", color: " #f8f9fa" }}
      >
        Edit Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier l'image du frigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group  ">
            <div className="custom-file">
              <input
                type="file"
                ref={fileInput}
                onChange={onFileChange}
                className="custom-file-input"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
              />
              <label className="custom-file-label" for="inputGroupFile04">
                Choose Picture{" "}
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onFileUpload}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
