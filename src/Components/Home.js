import React from 'react'
import Nav  from './Nav'
import Sidebar from './Sidebar'
export default function Home() {
    return ( 
<div>
 <Nav/>

  <div className="uk-container">
    <div
      className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
      style={{
        backgroundImage: "url(https://via.placeholder.com/1200x438.jpg)"
      }}
    >
      <div className="uk-position-cover uk-header-overlay" />
      <div className="uk-position-relative" data-uk-grid>
        <div className="uk-width-1-2@m uk-flex uk-flex-middle">
          <div className="uk-padding-large uk-padding-remove-right">
            <h1 className="uk-heading-small uk-margin-remove-top">
              Choose from thousands of recipes
            </h1>
            <p className="uk-text-secondary">
              Appropriately integrate technically sound value with scalable
              infomediaries negotiate sustainable strategic theme areas
            </p>
            <a
              className="uk-text-secondary uk-text-600 uk-text-small hvr-forward"
              href="sign-up.html"
            >
              Sign up today
              <span
                className="uk-margin-small-left"
                data-uk-icon="arrow-right"
              />
            </a>
          </div>
        </div>
        <div className="uk-width-expand@m"></div>
      </div>
    </div>
  </div>
  <div className="uk-section uk-section-default">
    <div className="uk-container">
      <div data-uk-grid>
       <Sidebar/>
        <div className="uk-width-expand@m">
          <div data-uk-grid>
            <div className="uk-width-expand@m">
              <form className="uk-search uk-search-default uk-width-1-1">
                <span data-uk-search-icon />
                <input
                  className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                  type="search"
                  placeholder="Search for recipes..."
                />
              </form>
            </div>
            <div className="uk-width-1-3@m uk-text-right@m uk-light">
              <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
                <option>Sort by: Latest</option>
                <option>Sort by: Top Rated</option>
                <option>Sort by: Trending</option>
              </select>
            </div>
          </div>
          <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Chef John's Turkey Sloppy Joes
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">5.0</span>
                      <span>(73)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by John Keller
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Brown Sugar Meatloaf
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">3.0</span>
                      <span>(94)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Danial Caleem
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Awesome Slow Cooker Pot Roast
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">4.5</span>
                      <span>(153)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Janet Small
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Broiled Tilapia Parmesan
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">5.0</span>
                      <span>(524)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Aleaxa Dorchest
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Baked Teriyaki Chicken
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">4.6</span>
                      <span>(404)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Ben Kaller
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Zesty Slow Cooker Chicken
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">3.9</span>
                      <span>(629)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Sam Brown
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Rosemary Ranch Chicken Kabobs
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">3.6</span>
                      <span>(149)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Theresa Samuel
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Slow Cooker Pulled Pork
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">2.9</span>
                      <span>(309)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Adam Brown
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Greek Lemon Chicken and Potatoes
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">3.6</span>
                      <span>(124)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Thomas Haller
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Turkey Posole Dinner
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">4.0</span>
                      <span>(84)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Thomas Haller
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Baked Macaroni and Cheese
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">2.9</span>
                      <span>(311)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Thomas Haller
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src="https://via.placeholder.com/300x160"
                    alt="Course Title"
                  />
                  <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                  <div className="uk-position-xsmall uk-position-top-right">
                    <a
                      href="#"
                      className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                      data-uk-icon="heart"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                    Deb's General Tso's Chicken
                  </h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.7"
                      />
                      <span className="uk-margin-xsmall-left">4.4</span>
                      <span>(68)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">
                      by Thomas Haller
                    </div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover" />
              </div>
            </div>
          </div>
          <div className="uk-margin-large-top uk-text-small">
            <ul
              className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove"
              data-uk-margin
            >
              <li>
                <a href="#">
                  <span data-uk-pagination-previous />
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li className="uk-active">
                <span>2</span>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <span data-uk-pagination-next />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="uk-section uk-section-default">
    <div className="uk-container">
      <div data-uk-grid>
        <div className="uk-width-expand">
          <h2>Videos</h2>
        </div>
        <div className="uk-width-1-3 uk-text-right uk-light">
          <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
            <option>Featured</option>
            <option>Top Rated</option>
            <option>Trending</option>
          </select>
        </div>
      </div>
      <div className="uk-child-width-1-2 uk-child-width-1-4@s" data-uk-grid>
        <div>
          <div className="uk-card uk-card-video">
            <div className="uk-inline uk-light">
              <img
                className="uk-border-rounded-large"
                src="https://via.placeholder.com/300x400"
                alt="Course Title"
              />
              <div className="uk-position-cover uk-card-overlay uk-border-rounded-large" />
              <div className="uk-position-center">
                <span data-uk-icon="icon: play-circle; ratio: 3.4" />
              </div>
              <div className="uk-position-small uk-position-bottom-left">
                <h5 className="uk-margin-small-bottom">
                  Business Presentation Course
                </h5>
                <div className="uk-text-xsmall">by Thomas Haller</div>
              </div>
            </div>
            <a href="recipe.html" className="uk-position-cover" />
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-video">
            <div className="uk-inline uk-light">
              <img
                className="uk-border-rounded-large"
                src="https://via.placeholder.com/300x400"
                alt="Course Title"
              />
              <div className="uk-position-cover uk-card-overlay uk-border-rounded-large" />
              <div className="uk-position-center">
                <span data-uk-icon="icon: play-circle; ratio: 3.4" />
              </div>
              <div className="uk-position-small uk-position-bottom-left">
                <h5 className="uk-margin-small-bottom">
                  Business Presentation Course
                </h5>
                <div className="uk-text-xsmall">by Thomas Haller</div>
              </div>
            </div>
            <a href="recipe.html" className="uk-position-cover" />
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-video">
            <div className="uk-inline uk-light">
              <img
                className="uk-border-rounded-large"
                src="https://via.placeholder.com/300x400"
                alt="Course Title"
              />
              <div className="uk-position-cover uk-card-overlay uk-border-rounded-large" />
              <div className="uk-position-center">
                <span data-uk-icon="icon: play-circle; ratio: 3.4" />
              </div>
              <div className="uk-position-small uk-position-bottom-left">
                <h5 className="uk-margin-small-bottom">
                  Business Presentation Course
                </h5>
                <div className="uk-text-xsmall">by Thomas Haller</div>
              </div>
            </div>
            <a href="recipe.html" className="uk-position-cover" />
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-video">
            <div className="uk-inline uk-light">
              <img
                className="uk-border-rounded-large"
                src="https://via.placeholder.com/300x400"
                alt="Course Title"
              />
              <div className="uk-position-cover uk-card-overlay uk-border-rounded-large" />
              <div className="uk-position-center">
                <span data-uk-icon="icon: play-circle; ratio: 3.4" />
              </div>
              <div className="uk-position-small uk-position-bottom-left">
                <h5 className="uk-margin-small-bottom">
                  Business Presentation Course
                </h5>
                <div className="uk-text-xsmall">by Thomas Haller</div>
              </div>
            </div>
            <a href="recipe.html" className="uk-position-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="uk-container">
    <div className="uk-background-primary uk-border-rounded-large uk-light">
      <div className="uk-width-3-4@m uk-margin-auto uk-padding-large">
        <div className="uk-text-center">
          <h2 className="uk-h2 uk-margin-remove">
            Be the first to know about the latest deals, receive new trending
            recipes &amp; more!
          </h2>
        </div>
        <div className="uk-margin-medium-top">
          <div data-uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
            <form>
              <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-1-1 uk-width-expand@s uk-first-column">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="uk-input uk-form-large uk-width-1-1 uk-border-pill"
                  />
                </div>
                <div className="uk-width-1-1 uk-width-auto@s">
                  <input
                    type="submit"
                    defaultValue="Subscribe"
                    className="uk-button uk-button-large uk-button-warning"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="uk-section uk-section-default">
    <div className="uk-container uk-text-secondary uk-text-500">
      <div className="uk-child-width-1-2@s" data-uk-grid>
        <div>
          <a href="#" className="uk-logo">
            Kocina
          </a>
        </div>
        <div className="uk-flex uk-flex-middle uk-flex-right@s">
          <div data-uk-grid className="uk-child-width-auto uk-grid-small">
            <div>
              <a
                href="https://www.facebook.com/"
                data-uk-icon="icon: facebook; ratio: 0.8"
                className="uk-icon-button facebook"
                target="_blank"
              />
            </div>
            <div>
              <a
                href="https://www.instagram.com/"
                data-uk-icon="icon: instagram; ratio: 0.8"
                className="uk-icon-button instagram"
                target="_blank"
              />
            </div>
            <div>
              <a
                href="mailto:info@blacompany.com"
                data-uk-icon="icon: twitter; ratio: 0.8"
                className="uk-icon-button twitter"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="uk-child-width-1-2@s uk-child-width-1-4@m" data-uk-grid>
        <div>
          <ul className="uk-list uk-text-small">
            <li>
              <a className="uk-link-text" href="#">
                Presentations
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Professionals
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Stores
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uk-list uk-text-small">
            <li>
              <a className="uk-link-text" href="#">
                Webinars
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Workshops
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Local Meetups
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uk-list uk-text-small">
            <li>
              <a className="uk-link-text" href="#">
                Our Initiatives
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Giving Back
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Communities
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uk-list uk-text-small">
            <li>
              <a className="uk-link-text" href="#">
                Contact Form
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Work With Us
              </a>
            </li>
            <li>
              <a className="uk-link-text" href="#">
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="uk-margin-medium-top uk-text-small uk-text-muted">
        <div>
          Made by a{" "}
          <a
            className="uk-link-muted"
            href="https://drifter.works/"
            target="_blank"
          >
            Drifter
          </a>{" "}
          in Guatemala City.
        </div>
      </div>
    </div>
  </footer>
  <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
    <div className="uk-offcanvas-bar">
      <a className="uk-logo" href="index.html">
        Kocina
      </a>
      <button
        className="uk-offcanvas-close"
        type="button"
        data-uk-close="ratio: 1.2"
      />
      <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
        <li className="uk-active">
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="recipe.html">Recipe</a>
        </li>
        <li>
          <a href="search.html">Search</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <a href="sign-in.html">Sign In</a>
        </li>
        <li>
          <a href="sign-up.html">Sign Up</a>
        </li>
      </ul>
      <div className="uk-margin-medium-top">
        <a
          className="uk-button uk-width-1-1 uk-button-primary"
          href="sign-up.html"
        >
          Sign Up
        </a>
      </div>
      <div className="uk-margin-medium-top uk-text-center">
        <div
          data-uk-grid
          className="uk-child-width-auto uk-grid-small uk-flex-center"
        >
          <div>
            <a
              href="https://twitter.com/"
              data-uk-icon="icon: twitter"
              className="uk-icon-link"
              target="_blank"
            />
          </div>
          <div>
            <a
              href="https://www.facebook.com/"
              data-uk-icon="icon: facebook"
              className="uk-icon-link"
              target="_blank"
            />
          </div>
          <div>
            <a
              href="https://www.instagram.com/"
              data-uk-icon="icon: instagram"
              className="uk-icon-link"
              target="_blank"
            />
          </div>
          <div>
            <a
              href="https://vimeo.com/"
              data-uk-icon="icon: vimeo"
              className="uk-icon-link"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}


