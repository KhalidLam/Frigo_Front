import React, { useState, useEffect, useContext } from "react";
import { Card, ListGroup, Col, Row, Container } from "react-bootstrap";

import { GetProductFrigo } from "./FunctionComponents/FrigoFunction";
import ModelAddProduct from "./FormComponents/ModelAddProduct";
import ThemeContext from "./LayoutsComponents/ThemeContext";
import SpinnerLoading from "./LayoutsComponents/SpinnerLoading";
import Nav from "./LayoutsComponents/Nav";
import Quantity from "./LayoutsComponents/Quantity";

import { Box } from "@chakra-ui/core";

import "../App.css";

export default function Frigo() {
  const { render } = useContext(ThemeContext);

  const [categoriesProducts, setCategoriesProducts] = useState([]);
  const [Show, setShow] = useState(true);

  useEffect(() => {
    GetProductFrigo()
      .then((res) => {
        setCategoriesProducts(res.data.success);
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(render);
  }, [render]);

  return (
    <>
      <Nav />

      <Container>
        <Row
          className=" p-4"
          style={{
            backgroundColor: "white",
            backgroundImage: `url(${require("../img/frigo_black.jpg")} )`,
            backgroundSize: " 602px 1100px",
            backgroundRepeat: "no-repeat",
            borderRadius: "70px",
          }}
        >
          <Box className="col-6 mt-3  ">
            <Card.Title
              className="text-center text-capitalize title2"
              style={{ margin: "-13px" }}
            >
              {" "}
              Ajouter un produit au frigo{" "}
            </Card.Title>

            <ModelAddProduct className="mt-5" />
          </Box>
          {Show ? (
            <Box className="col-6 align-self-center text-center">
              <SpinnerLoading animation="border" />
            </Box>
          ) : (
            <Box
              className="col-6 "
              style={{ maxHeight: " 600px", overflow: "auto" }}
            >
              <Card.Title className="text-center text-capitalize title2">
                {" "}
                Voici tous les produits que vous possedez dans votre Frigo{" "}
              </Card.Title>
              {/* <Row xs={1} md={2} lg={2} className=' d-flex row '> */}

              {categoriesProducts.map((categorie, key) => (
                <Col key={key}>
                  <Card
                    text="dark"
                    style={{
                      backgroundImage: `url(${categorie.category_image} )`,
                      backgroundSize: "300px 150px",
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="text-capitalize text-center">
                        {categorie.category_name}
                      </Card.Title>

                      <ListGroup
                        variant="flush"
                        style={{
                          boxShadow: " 0px 8px 16px 0px rgb(0 0 0 / 59%)",
                          maxHeight: " 200px",
                          overflow: "auto",
                        }}
                      >
                        {Object.keys(categorie.products).map((key) => (
                          <ListGroup.Item key={categorie.products[key].id}>
                            <Row xs={2} md={4} lg={6}>
                              <span
                                style={{
                                  textAlign: "center",
                                  display: "contents",
                                }}
                              >
                                {categorie.products[key].pivot.quantity}
                              </span>
                              <span
                                style={{
                                  fontSize: "10px",
                                  textAlign: "center",
                                  display: "contents",
                                }}
                              >
                                {"[" + categorie.products[key].pivot.type + "]"}
                              </span>
                              <span className="ml-2">
                                {" "}
                                {categorie.products[key].name}{" "}
                              </span>

                              <Quantity
                                qty={categorie.products[key].pivot.quantity}
                                IdProduct={categorie.products[key].id}
                                type={categorie.products[key].pivot.type}
                              />
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                  <br />
                </Col>
              ))}
              {/* </Row> */}
            </Box>
          )}
        </Row>
      </Container>
    </>
  );
}
