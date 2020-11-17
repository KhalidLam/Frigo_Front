import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { FiPrinter } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import { Card, Button, Form, Spinner } from "react-bootstrap";

import Nav from "./LayoutsComponents/Nav";
import ProductsPrinter from "./ProductsPrinter";
import {
  getListe,
  AddListeToFrigo,
  DeleteAllProductOfListe,
} from "./FunctionComponents/RecetteFunction";

export default function Liste() {

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [Show, setShow] = useState(false);
  const [Change, setChange] = useState(false);
  const [ShowData, setShowData] = useState(false);
  const [Products, setProducts] = useState([]);
  const [Liste] = useState([]);

  useEffect(() => {
    getListe()
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setShow(true);
        setShowData("Ranger");
        if (res.data === "") {
          setShowData("Parcourir");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });

  }, [Change]);

  useEffect(() => {
    Products.map((item) => {
      Liste.push({
        id: item.product_id,
        quantity: item.quantity,
        type: item.type,
      });
    });
  }, [Show]);

  const HandelAdd = () => {
    AddListeToFrigo(Liste)
      .then((res) => {
        console.log(res);
        setChange(!Change);
        setShowData("Parcourir");
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(Liste);
  };

  const HandleDeleteListe = () => {
    DeleteAllProductOfListe()
      .then((res) => {
        setChange(!Change);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Nav />

      <Card className="container p-3 col-6">
        <>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center title2">
              {" "}
              Liste de course{" "}
            </Card.Title>

            {ShowData === "Ranger" ? (
              <>
                <Form.Group className="d-flex justify-content-between">
                  <Button
                    className="add d-flex btn-danger pt-2"
                    type="submit"
                    onClick={HandelAdd}
                  >
                    <GoPlus className="mr-1 pt-1 " /> Ranger dans le frigo
                  </Button>

                  <Button
                    className="add d-flex btn-danger  "
                    type="submit"
                    onClick={HandleDeleteListe}
                  >
                    <BsTrash
                      color="white"
                      style={{ cursor: "pointer", fontSize: "larger" }}
                      className="pt-1 mr-1"
                    />
                    Vider la liste
                  </Button>

                  <FiPrinter
                    style={{ width: "24px", cursor: "pointer" }}
                    onClick={handlePrint}
                  />
                </Form.Group>
              </>
            ) : ShowData === "Parcourir" ? (
              <Form.Group className="d-flex justify-content-center">
                <Link
                  to="/recipes"
                  className="add d-flex btn-success p-2 "
                  style={{ textDecoration: "none" }}
                >
                  <span className="title3 text-dark">
                    Parcourir les recettes pour remplir votre liste de course{" "}
                  </span>
                </Link>
              </Form.Group>
            ) : (
              <div
                className=" uk-margin-large-top uk-flex-center"
                style={{ textAlign: "center" }}
              >
                <Spinner animation="border" />
              </div>
            )}
          </Card.Body>

          {Show && (
            <>
              <ProductsPrinter
                //  delete = { () => HandleDeleteListe()}
                change={Change}
                setChange={() => setChange()}
                // text = {CickPrint ? ' Votre Liste de courses ' :''}
                products={Products}
                ref={componentRef}
              />
            </>
          )}
        </>
      </Card>
    </>
  );
}
