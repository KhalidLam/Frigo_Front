import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import {
  Card,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "react-bootstrap";

import Nav from "../LayoutsComponents/Nav";
import SpinnerLoading from "../LayoutsComponents/SpinnerLoading";
import {
  getAllProduct,
  getRecipeWithProduct,
  AddProductRecipe,
} from "../FunctionComponents/RecetteFunction";

export default function AddProductToRecipe(props) {
  let history = useHistory();

  const [allProduct, setAllProduct] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [data, setData] = useState({});
  const [Products, setProduct] = useState({});
  const [Show, setShow] = useState(false);
  const [Show1, setShow1] = useState(false);
  const [ProductName, setProductName] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [options] = useState([]);

  useEffect(() => {
    getAllProduct()
      .then((response) => {
        console.log(response.data.success);
        setAllProduct(response.data.success);
        response.data.success.map((product) => {
          options.push({ value: product.id, label: product.name });
        });
      })
      .catch((error) => {
        console.log("error " + error);
      });
    console.log(recipe.length);

    getRecipeWithProduct(localStorage.recetteId)
      .then((response) => {
        setRecipe(response.data[0]);
      })
      .catch((error) => {
        console.log("error " + error);
      });
      
  }, [Show]);

  const handelChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
    allProduct.map((item) => {
      if (item.id === e.target.value) {
        setProductName(item.name);
      }
    });
    console.log(data);
  };

  const DataProductRecette = {
    productId: data.product,
    quantity: data.quantity,
    recetteId: localStorage.recetteId,
    type: data.type,
  };

  const SubAddProductRecipe = (e) => {
    e.preventDefault();
    setSpinner(true);
    console.log(DataProductRecette);
    AddProductRecipe(DataProductRecette)
      .then((res) => {
        console.log(res);
        console.log(DataProductRecette.productId);
        setShow(!Show);
        setShow1(true);
        setSpinner(false);

        setProduct({
          ...Products,
          [DataProductRecette.productId]: DataProductRecette,
        });
        // setProduct
        console.log(Products);
      })
      .catch((err) => {
        console.log(err + " 😱 rrrr");
      });
  };

  return (
    <>
      <Nav />
      <div>
        <div className="uk-section uk-section-default uk-padding-remove-top">
          <div className="uk-container">
            <div className="uk-grid-large" data-uk-grid>
              <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                <div>
                  <Card style={{ width: "25rem" }}>
                    {recipe.image ? (
                      <>
                        <Card.Img
                          variant="top"
                          src={`http://localhost:1000/${recipe.image}`}
                          style={{ height: "300px" }}
                        />
                        <Card.Body>
                          <Card.Title>{recipe.name}</Card.Title>
                          <Card.Text>
                            {recipe.description &&
                              recipe.description.slice(50, 100)}{" "}
                            ...
                          </Card.Text>
                        </Card.Body>
                        {Show1 && (
                          <ListGroup
                            className="list-group-flush"
                            style={{ maxHeight: " 150px", overflow: "auto" }}
                          >
                            {recipe.products.map((item) => (
                              <ListGroupItem>
                                {item.pivot.quantity +
                                  " (" +
                                  item.pivot.type +
                                  ") " +
                                  item.name}
                              </ListGroupItem>
                            ))}
                          </ListGroup>
                        )}
                      </>
                    ) : (
                      <SpinnerLoading animation="border" className="mb-3 " />
                    )}
                  </Card>
                </div>
              </div>

              <div className="uk-width-1-2@m">
                <Card
                  style={{
                    backgroundColor: "rgb(235, 74, 67)",
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  <Form
                    className="col-10 p-4"
                    onSubmit={(e) => SubAddProductRecipe(e)}
                    action=""
                  >
                    <Form.Group controlId="product">
                      <Form.Label> Product </Form.Label>

                      <Select
                        styles={{
                          menu: (provided) => ({
                            ...provided,
                            color: "black",
                          }),

                          control: (base) => ({
                            ...base,
                            backgroundColor: "#eb4a43",
                            borderRadius: "400px",
                            padding: "1px",
                            color: "white",
                          }),
                          singleValue: (base) => ({
                            color: "white",
                          }),
                          input: (base) => ({
                            ...base,
                            color: "white",
                          }),
                        }}
                        // inputProps={{ id: 'product' }}
                        // inputId = 'product'
                        options={options}
                        onChange={(e) =>
                          setData({ ...data, product: e.value })
                        }
                        className="input"
                      />
                    </Form.Group>

                    <Form.Group controlId="quantity">
                      <Form.Label> Quantity </Form.Label>
                      <Form.Control
                        style={{ backgroundColor: "rgb(235, 74, 67)" }}
                        className="input"
                        onChange={handelChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="type">
                      <Form.Label> Type of Quantity </Form.Label>
                      <Form.Control
                        as="select"
                        className="input"
                        onChange={handelChange}
                      >
                        <option hidden>Choose... </option>
                        <option>(U)nité </option>
                        <option>(L)itre </option>
                        <option> Cuil.à soupe</option>
                        <option> (G)ramme</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center">
                      <Button variant="warning" className="add" type="submit">
                        {spinner && (
                          <Spinner
                            className="mr-2"
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        )}
                        Ajouter
                      </Button>
                      <Button
                        to="/recipes"
                        variant="success"
                        className="add"
                        onClick={() => history.push(`/recipes`)}
                      >
                        Terminer La recette
                      </Button>
                    </Form.Group>
                  </Form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
