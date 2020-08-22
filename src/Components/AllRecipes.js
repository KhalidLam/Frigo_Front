import React, { useEffect, useState } from 'react'
import Nav from './LayoutsComponents/Nav' 
import Sidebar from './LayoutsComponents/Sidebar' 
import { getAllRecettes, getCategory, getSearch } from "./FunctionComponents/RecetteFunction"; 
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import ButtonAddRecipe from './LayoutsComponents/ButtonAddRecipe';
import {  useHistory } from 'react-router-dom'  
import Pagination from './LayoutsComponents/Pagination';
import Rating from './LayoutsComponents/Rating';
import SpinnerLoading from './LayoutsComponents/SpinnerLoading';
export default function Recipes() {
  let history = useHistory(); 
  const [userId, setUserId] = useState()
  const [search, setSearch] = useState(false)
  const [recipes, setRecipes] = useState([]) 
  const [Show, setShow] = useState(false)

  const [SearchWord, setSearchWord] = useState()

  const [iconId, setIconId] = useState([]) 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);




  useEffect(() => {

    getAllRecettes().then(response => {
      if (!search) {
        setRecipes(response.data.success)
      }
      setUserId(recipes.user_id)
      setShow(true)
      console.log(recipes);
      console.log(response.data[0]);
      console.log(response.data.length)
      console.log(recipes.length)
      console.log(typeof localStorage.iconId.split(','));
      // if ( typeof JSON.parse( localStorage.iconId) != null ){
      //   iconId.push(localStorage.iconId)
      // }
      console.log(JSON.parse(localStorage.iconId));
      console.log('iconId');
      console.log(iconId);
      console.log(iconId.concat(JSON.parse(localStorage.iconId)));
      setIconId(iconId.concat(JSON.parse(localStorage.iconId)))

      console.log(iconId.concat(localStorage.iconId));
      console.log('iconId');
      console.log(iconId);
    }).catch((error) => {
      console.log(error);
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

    // console.log( 'JSON.parse( localStorage.iconId)')
    // console.log(JSON.parse( localStorage.iconId) );
    // console.log([localStorage.iconId].join().split(','));
    // console.log("localStorage.iconId.concat(iconId)" );
    // console.log( iconId.concat(JSON.parse( localStorage.iconId)));
    // console.log(JSON.parse(localStorage.iconId).concat(iconId ));


  }
  const ClickSingle = (recette_id) => {
    localStorage.setItem('MissProduct','') 
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
               <ButtonAddRecipe/>
              </div>

              {Show ?
  
                <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
                  {currentPosts.map(item =>
                    <div key = {item.recette.id}  >
                      <div className="uk-card" style = {{backgroundColor : 'white'}}>
                        <div className="uk-card-media-top uk-inline uk-light"
                          style={{ width: '300px', height: '300px' }}
                        >
                          <img
                            style={{ width: '100%', height: '100%' }}
                            className="uk-border-rounded-medium"
                            src={`http://localhost:1000/${item.recette.image}`}
                            alt="Course Title"
                            onClick={() => ClickSingle(item.recette.id) }
                          />
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
                        <div style = {{   padding: '5px 15px 15px'}}>
          <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top title3"
      onClick={() => ClickSingle(item.recette.id) } 
      style = {{cursor : 'pointer'}}
          >
           {item.recette.name}
          </h3>
          <Rating  rating ={item.rating} /> 
                          <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                            <div className="uk-width-auto uk-flex uk-flex-middle">
                              <BsFillPersonFill />
                              <span className="uk-margin-xsmall-left">  {item.recette.number_person}</span>
                            </div>
                            <div className="uk-width-expand uk-text-right"> 
                    created by {item.userName}
                            </div>
                          </div>
                        </div>
                        {/* <Link to={`/recipe${item.recette.id}`} className="uk-position-cover" /> */}
                      </div>
                    </div>
                  )}

                </div>
                :
                <SpinnerLoading animation = 'grow' /> 

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
