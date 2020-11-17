import React, { useContext, useState } from "react";
import { Modal, Card, Form } from "react-bootstrap";

import ButtonSave from "../LayoutsComponents/ButtonSave";
import ThemeContext from "../LayoutsComponents/ThemeContext";
import { EditAvatar } from "../FunctionComponents/UserFunction";

export default function ModalEditAvatar(props) {
  const { render, setRendering } = useContext(ThemeContext);
  const [selectedImage, setselectedImage] = useState();
  const handleClose = () => props.setShow(false);
  const fileInput = React.createRef();

  const onFileChange = (event) => {
    console.log("props.Show" + props.Show);
    setRendering(!render);
    setselectedImage(fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const SubEditAvatar = (e) => {
    e.preventDefault();
    EditAvatar(selectedImage)
      .then((res) => {
        console.log(res);
        handleClose();
        setRendering(!render);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Modal
        show={props.Show}
        onHide={handleClose}
        style={{ borderRadius: "20px" }}
        id="modal"
      >
        <Card className="container  ">
          <Modal.Body>
            <Card.Title className="title2 text-center">
              {" "}
              Modifier votre Profile{" "}
            </Card.Title>
            <div className=" container col-md-5 ">
              <Card.Img
                variant="top"
                src={`http://localhost:1000/${props.User.avatar}`}
              />
            </div>
            <Form
              className=" container col-md-5 p-4"
              onSubmit={(e) => SubEditAvatar(e)}
              action=""
            >
              <Form.Group controlId="image">
                <Form.File
                  ref={fileInput}
                  onChange={onFileChange}
                  aria-describedby="inputGroupFileAddon04"
                />
              </Form.Group>
              <ButtonSave color="btn-warning" text="Save" />
            </Form>
          </Modal.Body>
        </Card>
      </Modal>
    </>
  );
}
