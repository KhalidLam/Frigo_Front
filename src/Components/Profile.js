import React, { useState, useEffect, useContext } from "react";
import { ListGroupItem, ListGroup, Card } from "react-bootstrap";

import Nav from "./LayoutsComponents/Nav";
import ThemeContext from "./LayoutsComponents/ThemeContext";
import { getProfile } from "./FunctionComponents/UserFunction";
import SpinnerLoading from "./LayoutsComponents/SpinnerLoading";
import ModalEditProfile from "./ModalComponents/ModalEditProfile";
import ModalEditAvatar from "./ModalComponents/ModalEditAvatar";

export default function EditProfile1() {
  const { render } = useContext(ThemeContext);
  const [User, setUser] = useState({});
  const [Show, setShow] = useState(false);

  const [ShowAvatar, setShowAvatar] = useState(false);

  const handleShowAvatar = () => {
    setShowAvatar(true);
    console.log("ShowAvatar " + ShowAvatar);
  };

  useEffect(() => {
    getProfile()
      .then((res) => {
        console.log(res.data.success);
        setUser(res.data.success);
        console.log(res.data.success.profile);
        console.log(res.data.success.profile.prenom);
        console.log(res.data.success.profile.nom);
        setShow(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(localStorage.lolo);
  }, [render]);

  var dateFormat = require("dateformat");
  return (
    <>
      <Nav />
      <Card className="container p-3   col-6">
        {Show ? (
          <>
            <Card.Title className="text-center title4 ">
              le profile de {"<< " + User.name + " >>"}
            </Card.Title>
            <div className="container d-flex justify-content-around row no-gutters pt-5">
              <div className="col-md-4 ">
                <div
                  className="uk-card-media-top uk-inline uk-light"
                  style={{ width: "300px", height: "300px" }}
                >
                  <Card.Img
                    style={{ width: "100%" }}
                    src={`http://localhost:1000/${User.avatar}`}
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium">
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#sas"
                        id="file-edit"
                        className="uk-icon-button  
               icon-file-edit
               uk-position-z-index uk-position-relative"
                        // data-uk-icon="file-edit"
                        onClick={handleShowAvatar}
                      >
                        <span uk-icon="file-edit"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <ModalEditAvatar
                  User={User}
                  Show={ShowAvatar}
                  setShow={setShowAvatar}
                />
              </div>

              <div className="col-md-8">
                <ListGroup className="list-group-flush ml-3 px-4">
                  <ListGroupItem>
                    <span className="p-3"> Pseudo :</span> {User.name}
                  </ListGroupItem>
                  {User.profile && (
                    <>
                      <ListGroupItem>
                        <span className="p-3"> Prénom : </span>
                        {User.profile.prenom}
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="p-3"> Sexe :</span> {User.profile.sexe}
                      </ListGroupItem>

                      <ListGroupItem>
                        <span className="p-3"> Nom :</span> {User.profile.nom}
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="p-3"> Email : </span> {User.email}
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="p-3"> Age :</span>
                        {User.profile.age && User.profile.age + " ans "}
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="p-3"> Tille : </span>
                        {User.profile.taille && User.profile.taille + " cm"}
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="p-3"> Membre depuis : </span>
                        {dateFormat(User.profile.created_at, " mmmm d, yyyy ")}
                      </ListGroupItem>
                    </>
                  )}
                  <ModalEditProfile User={User} />
                </ListGroup>
              </div>
            </div>
          </>
        ) : (
          <SpinnerLoading animation="border" />
        )}
      </Card>
    </>
  );
}
