import React, { useEffect, useState } from 'react'
import { getCategory } from './RecetteFunction';
import { Link } from 'react-router-dom'
export default function Sidebar() {

  const [CategoriesRecettes, setCategoryRecettes] = useState([])

  useEffect(() => {
    getCategory().then(response=> {
      // setRecipes(response.data);
      console.log(response.data.CategoryRecettes);
      setCategoryRecettes(response.data.CategoryRecettes)

  }).catch((error) => {
      console.log(error);
  })
  }, [])
    return (
        <div className="uk-width-1-4@m sticky-container">
        <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
           <Link to='/recipes'> <h2>Tout les Recettes </h2></Link>
          <ul
            className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
            data-uk-nav
          >
 
            {CategoriesRecettes.map(CategoryRecettes =>

<li className="uk-parent" key = {CategoryRecettes.category_id}>
<a href="#">{CategoryRecettes.category_name}</a>
<ul className="uk-nav-sub">
{Object.keys(CategoryRecettes.Recettes).map(key =>
 
    <li>
  <a href= {`/recipe${CategoryRecettes.Recettes[key].id}`}>{CategoryRecettes.Recettes[key].name}</a> 
  </li>
 

   )}  
</ul>
</li>

            )}
           
           </ul>
        </div>
        </div>
        
        
    )
}


