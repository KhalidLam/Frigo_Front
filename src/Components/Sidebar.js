import React from 'react'

export default function Sidebar() {
    return (
        <div className="uk-width-1-4@m sticky-container">
        <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
          <h2>Recipes</h2>
          <ul
            className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
            data-uk-nav
          >
            <li className="uk-parent uk-open">
              <a href="#">Dish Type</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Appetizers &amp; Snacks</a>
                </li>
                <li>
                  <a href="#">Bread Recipes</a>
                </li>
                <li>
                  <a href="#">Cake Recipes</a>
                </li>
                <li>
                  <a href="#">Candy and Fudge</a>
                </li>
                <li>
                  <a href="#">Casserole Recipes</a>
                </li>
                <li>
                  <a href="#">Christmas Cookies</a>
                </li>
                <li>
                  <a href="#">Cocktail Recipes</a>
                </li>
                <li>
                  <a href="#">Main Dishes</a>
                </li>
                <li>
                  <a href="#">Pasta Recipes</a>
                </li>
                <li>
                  <a href="#">Pie Recipes</a>
                </li>
                <li>
                  <a href="#">Sandwiches</a>
                </li>
              </ul>
            </li>
            <li className="uk-parent">
              <a href="#">Meal Type</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Breakfast and Brunch</a>
                </li>
                <li>
                  <a href="#">Desserts</a>
                </li>
                <li>
                  <a href="#">Dinners</a>
                </li>
                <li>
                  <a href="#">Lunch</a>
                </li>
              </ul>
            </li>
            <li className="uk-parent">
              <a href="#">Diet and Health</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Diabetic</a>
                </li>
                <li>
                  <a href="#">Gluten Free</a>
                </li>
                <li>
                  <a href="#">High Fiber Recipes</a>
                </li>
                <li>
                  <a href="#">Low Calorie</a>
                </li>
              </ul>
            </li>
            <li className="uk-parent">
              <a href="#">World Cuisine</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Chinese</a>
                </li>
                <li>
                  <a href="#">Indian</a>
                </li>
                <li>
                  <a href="#">Italian</a>
                </li>
                <li>
                  <a href="#">Mexican</a>
                </li>
              </ul>
            </li>
            <li className="uk-parent">
              <a href="#">Seasonal</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Baby Shower</a>
                </li>
                <li>
                  <a href="#">Birthday</a>
                </li>
                <li>
                  <a href="#">Christmas</a>
                </li>
                <li>
                  <a href="#">Halloween</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
        
        
    )
}


