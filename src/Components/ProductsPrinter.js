import React, { Component } from "react";
import { BsTrash } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import { DeleteProductOfListe } from "./FunctionComponents/RecetteFunction";

export default class ProductsPrinter extends Component {
  constructor(props) {
    super(props);
    this.state = { change: this.props.change };
    this.state = { setChange: this.props.setChange };
  }

  DeleteProduct = (product_id) => {
    console.log(product_id);
    localStorage.setItem("deletProductId", product_id);
    DeleteProductOfListe(product_id)
      .then((res) => {
        this.setState({ Show: true });
        this.props.setChange(!this.props.change);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <ListGroup className="list-group-flush d-flex justify-content-center  ">
        {this.props.products.map((Product) => (
          <ListGroupItem className="d-flex justify-content-between">
            {Product.quantity +
              " (" +
              Product.type +
              ")" +
              Product.product_name}
            <BsTrash
              style={{ color: "#eb4a43", cursor: "pointer", fontSize: "small" }}
              onClick={() => this.DeleteProduct(Product.product_id)}
              className="pt-1 mr-1"
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
