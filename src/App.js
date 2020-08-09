
import React, { useState, useContext } from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link,  Redirect} from "react-router-dom";
import './App.css';
import FormLogin from './Components/FormLogin';
import FormRegister from './Components/FormRegister';
import Home from './Components/Home'
import ThemeContext from "./Components/ThemeContext";
import Recipes from "./Components/Recipes";
import AddNewRecipe from "./Components/AddNewRecipe";
import Recipe from "./Components/Recipe"; 
import MesRecettes from "./Components/MesRecettes";
import RecipesFrigo from './Components/RecipesFrigo' ;
import MesFavoris from './Components/MesFavoris' ;
import {

  ThemeProvider,
  theme,
  CSSReset,
  usePopoverContext,

} from "@chakra-ui/core";
import Frigo from "./Components/Frigo";
import AddProductsToRecipe from "./Components/AddProductsToRecipe";
import Liste from "./Components/Liste";
import { getMesRecettes } from "./Components/RecetteFunction";
import Profile from "./Components/Profile";
import EditProfile from "./Components/ModalComponents/EditProfile";
 
// import { theme } from "@chakra-ui/core";

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
       <Route path='/details' component={Profile} />
       <Route path='/profile' component={EditProfile} />

       <Route exact path="/recipes" component={Recipes} />

       <Route exact path="/recipe:recipeId" component={Recipe} />
       
       <Route exact path="/frigo" component={Frigo} />
       <Route exact path="/liste" component={Liste} />
       
       <Route path='/AddNewRecipe' component={AddNewRecipe} />
       <Route path='/AddProductsToRecipe' component={AddProductsToRecipe} />
       <Route path='/MesRecettes' component={MesRecettes} />
       <Route path='/favoris' component={MesFavoris} />

       <Route  exact path='/Recettes' component={RecipesFrigo} />


      

     </Switch>
   </Router>

  </ThemeContext.Provider> 
// </ThemeProvider>
  );
}

export default App;
