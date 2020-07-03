
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
import Recipe from './AddRecipe' ;

import { ThemeProvider } from "emotion-theming";
import Frigo from "../Components/Frigo";
import FrigoImage from "./FrigoImage";
import FormLogin from "../Components/FormLogin";
import FormRegister from "../Components/FormRegister";
export default function Auth() {

  const [conect, setConect] = useState("");
  const [product, setProduct] = useState("");
  const [frigo, setFrigo] = useState("");
  const [stock, setStock] = useState("");


  const contextValue = {
    conect,
    updateConect: setConect,
    productId : product ,
    updateProduct :setProduct ,
    frigoId :frigo,
    updateFrigo :setFrigo ,
   stock : stock ,
   updateStock :  setStock
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* <ThemeProvider> */}
           <Router>
        <Switch>
          <Route exact path="/" component={Home1} />

          <Route exact path="/login1" component={Login1} />

          <Route path='/register1' component={Register1} />

          <Route exact path="/details" component={Profile1} />

          <Route exact path="/product" component={Product} />
          
          <Route exact path="/recipe" component={Recipe} />
         
          <Route exact path= "/frigo" component={Frigo} />
          <Route exact path= "/login"  component={FormLogin} />
          <Route exact path=  "/register"  component={FormRegister} />

          <Route exact path= "/frigo/image" component={FrigoImage} />


        </Switch>
      </Router>  
      {/* </ThemeProvider> */}
 

    </ThemeContext.Provider>
  );

}
