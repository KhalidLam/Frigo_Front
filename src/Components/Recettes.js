import React, { useEffect, useState } from 'react'
import Nav from './LayoutsComponents/Nav'
import { getFilterRecettes, getSearch } from './FunctionComponents/RecetteFunction'
import { BsFillPersonFill } from "react-icons/bs";
import Sidebar from './LayoutsComponents/Sidebar'
import {  useHistory } from 'react-router-dom'  
import Pagination from './LayoutsComponents/Pagination'; 
import Rating from './LayoutsComponents/Rating';
import ButtonAddRecipe from './LayoutsComponents/ButtonAddRecipe';
import SpinnerLoading from './LayoutsComponents/SpinnerLoading';

export default function Recettes() {
  let history = useHistory();
  const [SearchWord, setSearchWord] = useState()
  const [search, setSearch] = useState(false) 
  const [recipes, setRecipes] = useState([]) 
  const [Show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [iconId, setIconId] = useState([]) 
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); 
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    getFilterRecettes().then(response => {
      console.log(response.data.success);
      console.log(response.data.success.ProductNameDontExist);
      // setMissingProducts( response.data.success.ProductNameDontExist)
      var result = response.data.success
      if (!search) {
        setRecipes(response.data.success)
      }
      setShow(true)
      console.log(result.length);

    }).catch((error) => {
      console.log('error ' + error);
    })
  }, [])


  //search
  const handelChange = (e) => {
    setSearchWord(e.target.value)
    console.log(e.target.value)
  }


  const handelSearch = (e) => {
    if (e.key === 'Enter') {
      console.log(SearchWord)
      getSearch(SearchWord).then(res => {
        console.log(res)
        setRecipes(res.data.success)
        setSearch(true)
      }).catch((error) => {
        console.log(error.message);
      })
    }
  }
  const handelCheck = (val) => {
    return iconId.some(item => val == item)

  }

  const ClickHeart = (e) => {
    console.log(e.target)
    e.currentTarget.classList.toggle("icon-heart");
    //  setFavoris({ ...Favoris, [e.c]: DataProductRecette })
    console.log(e.currentTarget.dataset.id);

    if (handelCheck(e.currentTarget.dataset.id)) {
      const index = iconId.indexOf(e.currentTarget.dataset.id);
      if (index > -1) {
        iconId.splice(index, 1)
      }
    } else {
      iconId.push(e.currentTarget.dataset.id)
    }
    console.log("localStorage.iconId")
    console.log(localStorage.iconId)
    console.log(' after check iconId');
    console.log(iconId);

    console.log("localStorage.setItem('iconId', JSON.stringify(iconId) )")
    localStorage.setItem('iconId', JSON.stringify(iconId))

    console.log("after set localStorage.iconId")
    console.log(localStorage.iconId)


  }
  const ClickSingle = (recette_id, product) => {
    console.log(product);
    console.log(recette_id);
    localStorage.setItem('MissProduct', JSON.stringify(product))
    console.log(localStorage.MissProduct);
    history.push(`/recipe${recette_id} `)
  }
  return (
    <>
      <Nav />

      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div data-uk-grid>
            <Sidebar />
            <div className="uk-width-expand@m">
              <div data-uk-grid>
                <div className="uk-width-expand@m">
                  <form className="uk-search uk-search-default uk-width-1-1" onSubmit={(e) => e.preventDefault()}>
                    <span data-uk-search-icon />
                    <input
                      className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                      type="search"
                      placeholder="Search for recipes..."
                      onChange={handelChange}
                      onKeyDown={handelSearch}
                    />
                  </form>
                </div>
                <ButtonAddRecipe />
           
              </div>
              {Show ?

                <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>

                  {currentPosts.map(item =>
                    <> 
                      <div key={item.recette.id}
                        onClick={(e) => ClickSingle(item.recette.id, item.ProductNameDontExist)}
                      >
                        <div className="uk-card" style={{ backgroundColor: 'white' }}>
                          <div className="uk-card-media-top uk-inline uk-light"
                            style={{ width: '300px', height: '300px' }}

                          >
                            {/* <a href=""   onClick = {ClickSingle(item.recette.id)} > */}
                            <img
                              style={{ width: '100%', height: '100%' }}
                              className="uk-border-rounded-medium"
                              src={`http://localhost:1000/${item.recette.image}`}
                              alt="Course Title"

                            />
                            {/* </a> */}

                            <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                            {
                              handelCheck(item.recette.id) ?

                                <div className="uk-position-xsmall uk-position-top-right">
                                  <a id="heart"
                                    onClick={ClickHeart}
                                    className="uk-icon-button  
               icon-heart
               uk-position-z-index uk-position-relative"
                                    data-id={item.recette.id}
                                    data-uk-icon="heart"
                                  />
                                </div>
                                :
                                <div className="uk-position-xsmall uk-position-top-right">
                                  <a id="heart"
                                    onClick={ClickHeart}
                                    className="uk-icon-button  
                  
                  uk-position-z-index uk-position-relative"
                                    data-id={item.recette.id}
                                    data-uk-icon="heart"
                                  />
                                </div>

                            }
                          </div>
                          <div style={{ padding: '5px 15px 15px' }}>
                            <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top title3"
                            //  onClick = {click}
                            >
                              {item.recette.name}
                            </h3>
                            <Rating  rating ={item.rating} /> 
                            <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                              <div className="uk-width-auto uk-flex uk-flex-middle">
                                <BsFillPersonFill />
                                <span className="uk-margin-xsmall-left">  {item.recette.number_person}</span>
                              </div>
                              <div className="uk-width-expand uk-text-right title3">
                                {/* {userId && profile.name } */}
                                    created by {item.userName}
                              </div>
                            </div>
                          </div>
                          {/* <Link to={`/recipe${item.recette.id}`} className="uk-position-cover" /> */}
                        </div>
                      </div>
                    </>
                  )}

                </div>
                :
                <SpinnerLoading text = 'grow' />


              }

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
  )
}
