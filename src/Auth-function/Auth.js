import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Register1 from "./Register1";
import Login1 from "./Login1";
import Profile1 from "./Profile1";
import Home1 from "./Home1";

import Product from './AddProduct'
 
import Frigo1 from "./Frigo1";

import { ThemeProvider } from "emotion-theming";
import Frigo from "../Components/Frigo";
import FrigoImage from "./FrigoImage";
import FormLogin from "../Components/FormLogin";
import FormRegister from "../Components/FormRegister";
import  AddProductToRecipe from "./AddProductToRecipe";
import AddRecette from "./AddRecette";

export const RenderingContext = React.createContext(false);

export default function Auth() {



  const [render, setRendering ] = useState(false);

  const [product, setProduct] = useState("");
  const [frigo, setFrigo] = useState("");
  const [stock, setStock] = useState("");

 

const rendering =   {
  render,
setRendering 
 
  };

  return (
    <RenderingContext.Provider value={rendering}>
      {/* <ThemeProvider> */}
           <Router>
        <Switch>
          <Route exact path="/" component={Home1} />

          <Route exact path="/login1" component={Login1} />

          <Route path='/register1' component={Register1} />

          <Route exact path="/details" component={Profile1} />

          <Route exact path="/product" component={Product} />
          
          <Route exact path="/addrecipe" component={AddProductToRecipe} />
         
          <Route exact path= "/frigo" component={Frigo} />
          <Route exact path= "/login"  component={FormLogin} />
          <Route exact path=  "/register"  component={FormRegister} />

          <Route exact path= "/frigo/image" component={FrigoImage} />

          <Route exact path= "/frigo1" component={Frigo1} />

          <Route exact path="/addrecette" component={AddRecette} />


        </Switch>
      </Router>  
      {/* </ThemeProvider> */}
 

    </RenderingContext.Provider>
  );

}
