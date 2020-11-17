import React, { useEffect, useState, useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import { MissingContext } from "../App";
import Nav from "./LayoutsComponents/Nav";
import Sidebar from "./LayoutsComponents/Sidebar";
import Rating from "./LayoutsComponents/Rating";
import Search from "./LayoutsComponents/Search";
import Pagination from "./LayoutsComponents/Pagination";
import ButtonAddRecipe from "./LayoutsComponents/ButtonAddRecipe";
import SpinnerLoading from "./LayoutsComponents/SpinnerLoading";
import { getFilterRecettes } from "./FunctionComponents/RecetteFunction";

export default function Recettes() {
  let history = useHistory();

  const { setMissProducts } = useContext(MissingContext);
  const [search, setSearch] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [Show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [iconId] = useState([]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    getFilterRecettes()
      .then((response) => {
        console.log(response.data.success);
        console.log(response.data.success.ProductNameDontExist);
        // setMissingProducts( response.data.success.ProductNameDontExist)
        var result = response.data.success;
        if (search) {
          setRecipes(response.data.success);
        }
        setShow(true);
        console.log(result.length);
      })
      .catch((error) => {
        console.log("error " + error);
      });

    // eslint-disable-next-line
  }, []);

  const handelCheck = (val) => {
    return iconId.some((item) => val === item);
  };

  const ClickHeart = (e) => {
    console.log(e.target);
    e.currentTarget.classList.toggle("icon-heart");
    //  setFavoris({ ...Favoris, [e.c]: DataProductRecette })

    if (handelCheck(e.currentTarget.dataset.id)) {
      const index = iconId.indexOf(e.currentTarget.dataset.id);
      if (index > -1) {
        iconId.splice(index, 1);
      }
    } else {
      iconId.push(e.currentTarget.dataset.id);
    }

    localStorage.setItem("iconId", JSON.stringify(iconId));
  };

  const ClickSingle = (recette_id, product) => {
    setMissProducts(product);
    history.push(`/recipe${recette_id} `);
  };

  return (
    <>
      <Nav />
      <div className="uk-section uk-section-default">
        <div className=" card p-4 uk-container">
          <div data-uk-grid>
            <Sidebar />
            <div className="uk-width-expand@m">
              <div data-uk-grid>
                <div className="uk-width-expand@m">
                  <Search setRecipes={setRecipes} setSearch={setSearch} />
                </div>
                <ButtonAddRecipe />
              </div>
              {Show ? (
                <div
                  className="uk-child-width-1-2 uk-child-width-1-3@s"
                  data-uk-grid
                >
                  {currentPosts.map((item) => (
                    <div key={item.recette.id}>
                      <div
                        className="uk-card"
                        style={{ backgroundColor: "white" }}
                      >
                        <div
                          className="uk-card-media-top uk-inline uk-light"
                          style={{ width: "300px", height: "300px" }}
                        >
                          <img
                            style={{ width: "100%", height: "100%" }}
                            className="uk-border-rounded-medium"
                            src={`${process.env.REACT_APP_BASE_URL}${item.recette.image}`}
                            alt="Course Title"
                            onClick={(e) =>
                              ClickSingle(
                                item.recette.id,
                                item.ProductNameDontExist
                              )
                            }
                          />
                          <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                          {handelCheck(item.recette.id) ? (
                            <div className="uk-position-xsmall uk-position-top-right">
                              <a
                                href="#dki"
                                id="heart"
                                onClick={ClickHeart}
                                className="uk-icon-button icon-heart uk-position-z-index uk-position-relative"
                                data-id={item.recette.id}
                                // data-uk-icon="heart"
                              >
                                <span uk-icon="heart"></span>
                              </a>
                            </div>
                          ) : (
                            <div className="uk-position-xsmall uk-position-top-right">
                              <a
                                href="#dki"
                                id="heart"
                                onClick={ClickHeart}
                                className="uk-icon-button uk-position-z-index uk-position-relative"
                                data-id={item.recette.id}
                                // data-uk-icon="heart"
                              >
                                <span uk-icon="heart"></span>
                              </a>
                            </div>
                          )}
                        </div>
                        <div style={{ padding: "5px 15px 15px" }}>
                          <h3
                            className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top title3"
                            onClick={(e) =>
                              ClickSingle(
                                item.recette.id,
                                item.ProductNameDontExist
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {item.recette.name}
                          </h3>
                          <Rating rating={item.rating} />
                          <div
                            className="uk-text-xsmall uk-text-muted"
                            data-uk-grid
                          >
                            <div className="uk-width-auto uk-flex uk-flex-middle">
                              <BsFillPersonFill />
                              <span className="uk-margin-xsmall-left">
                                {item.recette.number_person}
                              </span>
                            </div>
                            <div className="uk-width-expand uk-text-right  ">
                              created by {item.userName}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <SpinnerLoading animation="grow" />
              )}

              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={recipes.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
