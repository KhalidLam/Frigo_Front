
import React, { useEffect, useState } from 'react'
import Nav from './LayoutsComponents/Nav'
import { getMesRecettes, getSearch, getMesFavoris } from './FunctionComponents/RecetteFunction'
import { BsFillPersonFill } from "react-icons/bs";

import Sidebar from './LayoutsComponents/Sidebar'
import { Link } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap';
import Pagination from './LayoutsComponents/Pagination';
import { FaStar } from 'react-icons/fa'
import SpinnerLoading from './LayoutsComponents/SpinnerLoading';
export default function MesFvoris() {

    const [recipes, setRecipes] = useState([])
    const [Show, setShow] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [SearchWord, setSearchWord] = useState()
    const [search, setSearch] = useState(false)
    const [iconId, setIconId] = useState([])
    const [change, setChange] = useState(false)
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);
    useEffect(() => {
        setIconId(iconId.concat(JSON.parse(localStorage.iconId)))
        setChange(!change)

    }, [])
    useEffect(() => {
        console.log(localStorage.iconId);
        console.log(iconId)
        getMesFavoris(iconId).then(response => {
            //   setAllComments(response.data)
            console.log(response);
            if (!search) {
                setRecipes(response.data.success)
            }
            setShow(true)
        }).catch((error) => {
            console.log('error ' + error);
        })
    }, [change])


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
        //  e.currentTarget.classList.toggle("icon-heart");
        console.log(e.currentTarget.dataset.id);
        // if( handelCheck(e.currentTarget.dataset.id) )  {
        const index = iconId.indexOf(e.currentTarget.dataset.id);
        if (index > -1) {
            iconId.splice(index, 1)
            // } 
            localStorage.setItem('iconId', JSON.stringify(iconId))
            setIconId(iconId)
            setChange(!change)
        }
    }
    const okey = () => {
        console.log("localStorage.setItem('iconId', JSON.stringify(iconId) )")
        localStorage.setItem('iconId', [])
        setIconId(iconId)
        console.log("  button localStorage.iconId")
        console.log(localStorage.iconId)
setChange(!change)
        console.log('  button iconId');
        console.log(iconId);
    }
    return (
        <>
            <Nav />
      
            <div className="uk-section uk-section-default uk-padding-remove-top">
                <div className="uk-container">
              
                        
                        <div className="uk-width-1-2@m uk-text-right@m">
                            {/* <form className="uk-search uk-search-default uk-width-1-1" onSubmit={(e) => e.preventDefault()}>
                                <span data-uk-search-icon />
                                <input
                                    className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                                    type="search"
                                    placeholder="Search for recipes..."
                                    onChange={handelChange}
                                    onKeyDown={handelSearch}
                                />
                            </form> */}
                        </div> 
                        <div className="uk-width-1-2@m">
                            <h1 className ='title1 text-center'> Mes Favoris </h1>
                        </div>
                   
                    {Show ?
                        <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top" data-uk-grid >
                            {recipes.map(item =>
                                <div key = {item.recette.id} >
                                    <div className="uk-card" style = {{backgroundColor : 'white'}}>
                                        <div className="uk-card-media-top uk-inline uk-light"
                                            style={{ width: '300px', height: '300px' }}
                                        >
                                            <img
                                                style={{ width: '100%', height: '100%' }}
                                                className="uk-border-rounded-medium"
                                                src={`http://localhost:1000/${item.recette.image}`}
                                                alt="Course Title"
                                            />
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
                                        </div>
                                        <div style = {{   padding: '5px 15px 15px'}}>
                                            <h3 className="uk-card-title title3 uk-text-500 uk-margin-small-bottom uk-margin-top">
                                                {item.recette.name}
                                            </h3>
                                        <div className="uk-rating d-flex">
         {/* <span className = 'pr-1'>
         ( { item.rating.toPrecision(2)})</span> 
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                          <label>
                            <input type="radio" name="rating"
                             value={ item.rating.toPrecision(2)} hidden />
                       <FaStar className='star'  
                       color={ratingValue <= ( item.rating.toPrecision(2)) ? "F90" : "rgb(161, 158, 158)"} size={18} />
                          </label>
                        )
                      }
                      
                      )} */}

                    </div>  
                                            <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                                    <BsFillPersonFill />
                                                    <span className="uk-margin-xsmall-left">  {item.recette.number_person}</span>
                                                </div>
                                                <div className="uk-width-expand uk-text-right">
                                                    Created by  {item.userName}
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/recipe${item.recette.id}`} className="uk-position-cover" />
                                    </div>
                                </div>
                            )}
                        </div>

                        :
                        <SpinnerLoading animation = 'border' />  }

                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={recipes.length}
                        paginate={paginate}
                    />

                </div>
            </div>
        </>
    )
}
