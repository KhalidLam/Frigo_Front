import React, { useState } from 'react'
import { getSearch } from '../FunctionComponents/RecetteFunction'

export default function Search(props) {

    const [SearchWord, setSearchWord] = useState()

     //search
  const handelChange = (e) => {
    setSearchWord(e.target.value) 
      console.log(SearchWord)
      getSearch(e.target.value).then(res => {
        console.log(res)
        props.setRecipes(res.data.success)
        props.setSearch(true)
      }).catch((error) => {
        console.log(error.message);
      }) 
    console.log(e.target.value)
  } 
    return (
        
                <form className="uk-search uk-search-default uk-width-1-1" onSubmit={(e) => e.preventDefault()}>
                    <span data-uk-search-icon />
                    <input
                      className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                      type="search"
                      placeholder="Search for recipes..."
                      onChange={handelChange} 
                    />
                  </form>
        
    )
}
