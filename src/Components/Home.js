import React, { Fragment, useEffect } from "react";
import Nav from "./LayoutsComponents/Nav";
// import home3 from '../im'
import Home3 from "../img/home3.jpg";
import { Card } from "react-bootstrap";
import courses from "../img/courses.jpg";
import frigo from "../img/frigo.jpg";
import recettes from "../img/recettes.jpg";
import arrow from "../img/arrow.png";

export default function Home() {


  // const style = {
  //   height: "300px",
  // };

  return (
    <div>
      <Nav />

      <div>
        <div
          className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
          style={{
            backgroundImage: `url(${Home3})`,
            height: "700px",
          }}
        >
          <div className="uk-position-cover uk-header-overlay" />
          <div className="uk-position-relative" data-uk-grid>
            <div className="uk-width-1-2@m uk-flex uk-flex-middle">
              <div className="uk-padding-large uk-padding-remove-right">
                <h1
                  className="uk-heading-small uk-margin-remove-top mt-5  "
                  style={{
                    color: "#eb4a43",
                    fontFamily: "Lobster",
                    fontSize: "60px",
                  }}
                >
                  Bienvenue chez Frikocina
                </h1>
                <h3 className="uk-text-secondary title1">
                  Qu'est-ce qu'on mange ce soir ?
                </h3>
              </div>
            </div>
            <div className="uk-width-expand@m"></div>
          </div>
        </div>
      </div>
      <main className="p-3 presentation">
        <div
          className="  card py-3  container  col-10 mt-5 text-center"
          style={{ fontStyle: " italic" }}
        >
          <Card.Title className="   title1"> Bonjour, </Card.Title>
          <p>
            Vous rêvez d'une application du quotidien pour cuisiner simplement,
            sainement tout en disant adieu au gaspillage ?
          </p>
          <p>
            L’application de cuisine gratuite « Frikocina » est faîte pour vous
            !
          </p>
        </div>
      </main>
      <main className=" container  ">
        <div className="row container justify-content-center">
          {/* <CardDeck > */}
          <Fragment>
            <Card
              className="col-lg-3 col-md-4 col-sm-10"
              style={{ width: "18rem", height: "100%" }}
            >
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={`${courses}`}
              />
              <Card.Title className="text-center title4">
                Vos Courses
              </Card.Title>
            </Card>
            <Card.Img
              style={{ width: "10rem", height: "100%" }}
              className="align-self-center col-lg-1 col-md-2 col-sm-10"
              variant="top"
              src={`${arrow}`}
            />
          </Fragment>

          <>
            <Card
              className="col-lg-3 col-md-4 col-sm-10"
              style={{ width: "18rem", height: "100%" }}
            >
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={`${frigo}`}
              />
              <Card.Title className="text-center title4">
                Vos Aliments
              </Card.Title>
            </Card>
            <Card.Img
              style={{ width: "10rem", height: "100%" }}
              className="align-self-center col-lg-1 col-md-3 col-sm-10"
              variant="top"
              src={`${arrow}`}
            />
          </>

          <>
            <Card
              className="col-lg-3 col-md-4 col-sm-10"
              style={{ width: "18rem", height: "100%" }}
            >
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={`${recettes}`}
              />
              <Card.Title className="text-center title4">
                Vos Recettes
              </Card.Title>
            </Card>
          </>

          {/* </CardDeck> */}
        </div>
      </main>
    </div>
  );
}
