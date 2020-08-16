import React, { useState, useContext } from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link,  Redirect} from "react-router-dom";
import './App.css';
import FormLogin from './Components/FormComponents/FormLogin';
import FormRegister from './Components/FormComponents/FormRegister';
import Home from './Components/Home'
import ThemeContext from "./Components/LayoutsComponents/ThemeContext";
import AllRecipes from "./Components/AllRecipes";
import AddNewRecipe from "./Components/FormComponents/AddNewRecipe";
import SingleRecipe from "./Components/SingleRecipe"; 
import MesRecettes from "./Components/MesRecettes";
import Recettes from './Components/Recettes' ;
import MesFavoris from './Components/MesFavoris' ;
import {

  ThemeProvider,
  theme,
  CSSReset,
  usePopoverContext,

} from "@chakra-ui/core";
import Frigo from "./Components/Frigo";
import AddProductsToRecipe from "./Components/FormComponents/AddProductsToRecipe";
import Liste from "./Components/Liste";
import { getMesRecettes } from "./Components/FunctionComponents/RecetteFunction";
import Profile from "./Components/Profile";
import ProfileTest from "./Components/ProfileTest";
import { PrintContextConsumer } from "react-to-print";
 
// import { theme } from "@chakra-ui/core";
// import {Example} from "./Components/Lise";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};




  function App() {
  
    const [render, setRendering ] = useState(false);
   
    const contextValue = {
    render,
    setRendering 
    };
   
   return (

    // <ThemeProvider >
    // <CSSReset />
  <ThemeContext.Provider value={contextValue}> 
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />

       <Route exact path="/login" component={FormLogin} />
       <Route path='/register' component={FormRegister} />
       <Route path='/details' component={ProfileTest} />
       <Route path='/profile' component={Profile} />

       <Route exact path="/recipes" component={AllRecipes} />

       <Route exact path="/recipe:recipeId" component={SingleRecipe} />
       
       <Route exact path="/frigo" component={Frigo} />
       <Route exact path="/liste" component={Liste} />
       
       <Route path='/AddNewRecipe' component={AddNewRecipe} />
       <Route path='/AddProductsToRecipe' component={AddProductsToRecipe} />
       <Route path='/MesRecettes' component={MesRecettes} />
       <Route path='/favoris' component={MesFavoris} />

       <Route  exact path='/Recettes' component={Recettes} />

       {/* <Route  exact path='/print' component={Example} /> */}

      

     </Switch>
   </Router>

  </ThemeContext.Provider> 
// </ThemeProvider>
  );
}

export default App;
